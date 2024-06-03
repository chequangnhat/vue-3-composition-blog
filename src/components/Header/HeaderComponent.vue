<template>
  <div
    class="w-full home-header xl:max-w-[62%] flex justify-between items-center mx-auto relative z-50 bg-transparent top-[20px]"
  >
    <router-link to="/" class="font-black text-[26px]">
      <span class="text-white">Read</span><span class="text-[#FFD369]">it</span
      ><span class="text-white">.</span>
    </router-link>
    <!-- <Icon icon="mdi-light:home" /> -->
    <div class="flex justify-around items-center text-white w-2/6 text-lg cursor-pointer">
      <div>Home</div>
      <div>Articles</div>
      <div>Team</div>
      <div>Contact</div>
    </div>
  </div>
</template>
