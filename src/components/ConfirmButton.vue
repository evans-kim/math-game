<template>
  <button @click="$emit('check', true)" :class="statusClass"
          class="text-white p-2 w-full h-18 shadow-2xl confirm-button"> 확인
  </button>
</template>

<script lang="ts">

import {Prop, Vue, Component} from "vue-property-decorator";

@Component
export default class ConfirmButton extends Vue {
  @Prop(String) readonly status?: string;

  get statusClass(): Array<string> {
    if (!this.status) {
      return ['bg-gray-600']
    }
    if (this.status === 'good') {
      return ['bg-green-600']
    }
    if (this.status === 'bad') {
      return ['bg-red-600']
    }
    return [''];
  }

}
</script>

<style scoped>
.confirm-button {
  transition: all ease-in-out 0.3s;
}
</style>
