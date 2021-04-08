<template>
  <div class="bg-gray-300 text-gray-800 relative flex max-w-md mx-auto ">
    <div class="h-full w-full px-5 pt-6 pb-20 overflow-y-auto">

      <div class="mb-5 text-gray-800">

        <router-link to="/quiz/clock"
                     class="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
                     style="background: url(https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=600&q=80) center; background-size: cover;">
          <h2 class="text-2xl font-bold leading-tight mb-3">시간계산 정복하기</h2>
          <div class="h-48"></div>

          <div class="flex w-full items-center text-sm text-gray-700 font-medium">
            <div class="flex-1 flex items-center">
              <div>난이도 - 기본</div>
            </div>
            <div><i class="mdi mdi-thumb-up"></i> 총 10문제</div>
          </div>
        </router-link>
      </div>
      <div class="mb-5">
        <a href="#" class="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
           style="background: url(https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80) center; background-size: cover;">
          <div class="h-48"></div>
          <h2 class="text-white text-2xl font-bold leading-tight mb-3 pr-5">덧셈뺄셈 정복하기</h2>
          <div class="flex w-full items-center text-sm text-gray-300 font-medium">
            <div class="flex-1 flex items-center">
              <div class="rounded-full w-8 h-8 mr-3"
                   style="background: url(https://randomuser.me/api/portraits/women/55.jpg) center; background-size: cover;"></div>
              <div>난이도 - 기본</div>
            </div>
            <div><i class="mdi mdi-thumb-up"></i> 총 10문제</div>
          </div>
        </a>
      </div>
      <div class="mb-3">
        <h1 class="text-3xl font-bold">지난 기록</h1>
        <p class="text-sm text-gray-500 uppercase font-bold">최근 5개의 기록</p>
      </div>
      <div>
        <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
          <div class="block h-24 w-2/5 rounded overflow-hidden"
               style="background: url(https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center; background-size: cover;"></div>
          <div class="pl-3 w-3/5">
            <p class="text-xs text-gray-500 uppercase font-semibold">SPORTS</p>
            <h3 class="text-md font-semibold leading-tight mb-3">Lorem ipsum dolor sit amet consectetur adipisicing
              elit</h3>
            <div class="flex w-full items-center text-xs text-gray-500 font-medium">
              <div class="rounded-full w-5 h-5 mr-3"
                   style="background: url(https://randomuser.me/api/portraits/men/41.jpg) center; background-size: cover;"></div>
              <div>Jack Ryan</div>
            </div>
          </div>
        </a>
      </div>
      <hr class="border-gray-200 my-3">
      <div>
        <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
          <div class="block h-24 w-2/5 rounded overflow-hidden"
               style="background: url(https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center; background-size: cover;"></div>
          <div class="pl-3 w-3/5">
            <p class="text-xs text-gray-500 uppercase font-semibold">ART</p>
            <h3 class="text-md font-semibold leading-tight mb-3">Lorem ipsum dolor sit amet consectetur adipisicing
              elit</h3>
            <div class="flex w-full items-center text-xs text-gray-500 font-medium">
              <div class="rounded-full w-5 h-5 mr-3"
                   style="background: url(https://randomuser.me/api/portraits/men/63.jpg) center; background-size: cover;"></div>
              <div>Kevin Jackson</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
  }
}
</script>
