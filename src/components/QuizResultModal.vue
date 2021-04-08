<template>
  <b-modal v-if="value" :active="value" @input="(val)=>{ $emit('input', val) }">
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
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {QuizData} from "@/types/Quiz.ts";

@Component
export default class QuizResultModal extends Vue{
  @Prop() readonly value?: boolean;
  @Prop() readonly currentQuiz?: QuizData;

  nextStep(): void{
    this.$emit('next', true)
  }
}
</script>

<style scoped>

</style>