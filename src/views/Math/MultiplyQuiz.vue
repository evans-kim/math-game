<template>
  <div class="w-full flex items-center justify-between flex-col bg-gray-200">
    <quiz-progress :value="Math.round(step/questions.length * 100)"></quiz-progress>
    <div class="flex justify-evenly text-2xl p-4 ">
      {{ this.currentQuiz.first }} X {{ this.currentQuiz.second }} = <b-input class="w-12 text-2xl" v-model="answer.value"/>
    </div>
    <confirm-button @check="checkAnswer" :status="currentQuiz.status || ''"/>
    <quiz-result-modal v-model="modalShow" :current-quiz="currentQuiz" @next="()=>{ nextStep(); }"></quiz-result-modal>
  </div>
</template>

<script lang="ts">
import Clock from "@/components/Clock.vue";
import ConfirmButton from "@/components/ConfirmButton.vue";
import {Component} from "vue-property-decorator";
import Quiz from "@/views/Math/Quiz.vue";
import QuizProgress from "@/components/QuizProgress.vue";
import QuizResultModal from "@/components/QuizResultModal.vue";

@Component({
  components: {QuizResultModal, QuizProgress, Quiz, ConfirmButton, Clock}
})
export default class MultiplyQuiz extends Quiz {
  get isCorrect(): boolean {

    return this.currentQuiz?.first * this.currentQuiz?.second === parseInt( this.answer.value );
  }

  answer = { value: '0' };

  quizGenerate(): void {

    this.questions.push({
      first: this.randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9]),
      second: this.randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9]),
      status: ''
    })
  }

  cleanUpAnswer(): void{
    this.answer.value = '';
  }

  complete(): void{
    this.$router.push("/");
  }
}
</script>

<style scoped>

</style>