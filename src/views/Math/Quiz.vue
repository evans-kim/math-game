<template>
  <div class="w-full flex items-center justify-between flex-col bg-gray-200">
    <quiz-progress :value="Math.round(step/questions.length * 100)"></quiz-progress>
    <slot></slot>
    <confirm-button @check="checkAnswer" :status="currentQuiz.status || ''"/>
    <quiz-result-modal v-model="modalShow" @next="()=>{ nextStep(); }"></quiz-result-modal>
  </div>
</template>

<script lang="ts">
import Clock from "@/components/Clock.vue";
import ConfirmButton from "@/components/ConfirmButton.vue";
import {Component, Vue} from "vue-property-decorator";
import QuizProgress from "@/components/QuizProgress.vue";
import {QuizAnswer, QuizData} from "@/types/Quiz.ts";
import QuizResultModal from "@/components/QuizResultModal.vue";

@Component({
  components: {QuizResultModal, QuizProgress, ConfirmButton, Clock}
})
export default class Quiz extends Vue {

  step = 0;
  questions: Array<QuizData> = [];
  answer: QuizAnswer = {};
  status = '';
  modalShow = false;

  get currentQuiz(): QuizData {
    return this.questions[this.step] || {};
  }

  get isComplete(): boolean {
    return (this.step + 1) === this.questions.length;
  }

  /**
   * 메소드
   */

  randomElement(array: Array<number>): number {
    return array[Math.floor(Math.random() * array.length)]
  }

  quizGenerate(): void {
    this.questions.push({
      hour: this.randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      min: this.randomElement([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]),
      status: ''
    })
  }

  cleanUpQuizzes(): void {
    this.questions.map((que, idx) => {
      this.$delete(this.questions, idx);
    })

  }

  get isCorrect(): boolean {
    return true; // or false
  }

  checkAnswer(): void {

    if (this.isCorrect) {
      this.questions[this.step].status = 'good';
    } else {
      this.questions[this.step].status = 'bad';
    }
    this.modalShow = true;
  }

  nextStep(): void {
    this.cleanUpAnswer();

    this.step += 1;
    this.modalShow = false;
    this.$nextTick(() => {
      if ((this.step) >= this.questions.length) {
        this.$buefy.dialog.alert('모두 풀었어요!');
        this.complete();
        return;
      }
    })
  }

  complete(): void{
    return;
  }

  cleanUpAnswer(): void{
    this.answer = {};
  }

  async initialize(): Promise<boolean> {
    return new Promise(((resolve): void => {
      for (let i = 0; i < 5; i++) {
        this.quizGenerate();
      }
      resolve(true);
    }))
  }

  mounted(): void {
    this.initialize();
  }
}
</script>

<style scoped>

</style>