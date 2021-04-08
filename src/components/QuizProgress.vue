<template>
  <div class="h-12 w-full p-2 bg-white flex items-center">
    <b-progress type="is-success" size="is-medium" class="h-5 w-full"
                :value="value"></b-progress>
  </div>
</template>

<script lang="ts">

import {Vue, Prop, Component} from "vue-property-decorator";

@Component
export default class QuizProgress extends Vue{
  @Prop({default:0}) readonly value?: number;

}
</script>

<style scoped>

</style>