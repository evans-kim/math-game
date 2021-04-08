<template>
  <div id="app" class="bg-gray-300 max-w-md mx-auto border relative " style="min-height: 100vh">
    <div class="p-4 bg-white text-center absolute w-full top-0 z-10">
      <h1 class="text-3xl font-bold">수학놀이</h1>
      <p class="text-sm text-gray-500 uppercase font-bold">아빠와 나, 우리의 비밀노트</p>
    </div>
    <div class="w-full h-full" style="margin-top: 90px">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">


</style>
