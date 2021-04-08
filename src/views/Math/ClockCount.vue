<template>
  <div class="w-full flex items-center justify-between flex-col bg-gray-200">
    <div class="h-12 w-full p-2 bg-white flex items-center">
      <b-progress type="is-success" size="is-medium" class="h-5 w-full"
                  :value="Math.round(step/questions.length * 100)"></b-progress>
    </div>

    <div class="relative p-2" v-if="currentQuiz.hour">
      <clock size="280px" :hour="currentQuiz.hour" :min="currentQuiz.min" :key="'clock'+step"></clock>
    </div>
    <div class="w-full flex items-center justify-center p-4">
      <label class="text-lg mr-4">
        <input class="p-2 rounded shadow border w-12 " v-model="answer.hour"/> 시
      </label>
      <label class="text-lg">
        <input class="p-2 rounded shadow border w-12" v-model="answer.min"/> 분
      </label>
    </div>
    <confirm-button @check="checkAnswer" :status="currentQuiz.status"/>
    <b-modal v-model="modalShow">
      <div class="flex justify-evenly items-center flex-col ">
        <template v-if="(currentQuiz.status === 'good')">

          <h2 class="text-white text-2xl"> 정답! </h2>
        </template>
        <template v-else>

          <h2 class="text-white text-2xl"> 앗! 틀렸네요.</h2>
        </template>
        <button class="p-2 mt-4 w-2/3 rounded-md bg-blue-600 text-white text-2xl" @click="nextStep"> 다음문제</button>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Clock from "@/components/Clock.vue";
import ConfirmButton from "@/components/ConfirmButton.vue";
import {Component, Vue} from "vue-property-decorator";

interface ClockQuiz{
 hour: number;
 min: number;
 status: string;
}

@Component({
  components: {ConfirmButton, Clock}
})
export default class ClockCount extends Vue {

  questions: Array<ClockQuiz> = [];
  step = 0;
  answer = {
    hour: '',
    min: ''
  };
  status = '';
  modalShow = false;

  get currentQuiz(): ClockQuiz {
    return this.questions[this.step] || {hour: 0, min: 0, status: ''};
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
      hour: this.randomElement([1,2,3,4,5,6,7,8,9,10,11,12]),
      min: this.randomElement([5,10,15,20,25,30,35,40,45,50,55,60]),
      status: ''
    })
  }

  cleanUpQuizzes(): void {
    this.questions.map((que, idx)=>{
      this.$delete(this.questions, idx);
    })

  }

  checkAnswer(): void {
    if (!this.answer.min) {
      this.answer.min = '0';
    }

    const isCurrect =
        parseInt(this.answer.hour) === this.currentQuiz.hour &&
        parseInt(this.answer.min) === this.currentQuiz.min;

    if (isCurrect) {
      this.questions[this.step].status = 'good';
    } else {
      this.questions[this.step].status = 'bad';
    }
    this.modalShow = true;
  }

  nextStep(): void {

    this.modalShow = false;

    this.$nextTick(() => {
      if ((this.step + 1) >= this.questions.length) {
        this.$buefy.dialog.alert('모두 풀었어요!')
        return;
      }
      this.answer.hour = '';
      this.answer.min = '';
      this.step += 1;
    })

  }
  async initialize(): Promise<boolean> {
    return new Promise(( (resolve): void => {
      for (let i = 0; i < 10; i++) {
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
