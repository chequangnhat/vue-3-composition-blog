<script setup lang="ts">
import CardItem from '@/components/Card/CardItem.vue'
import HeaderComponent from '@/components/Header/HeaderComponent.vue'
import PressureLowFill from '@/components/icons/PressureLowFill.vue'
</script>

<template>
  <div
    class="home-container font-poppins w-sreen h-screen bg-gradient-to-tr from-[#F43BF3] via-[#F77EAC] to-[#FAC064] flex flex-col"
  >
    <HeaderComponent />

    <div class="h-4/6 w-5/6 xl:max-w-[60%] mx-auto flex flex-col text-white mt-36">
      <span class="text-xl font-normal">Hello! Welcome to</span>
      <span class="text-[10rem] font-bold">Readit blog</span>
      <span class="max-w-[65%] text-lg font-normal"
        >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean.</span
      >
      <div>
        <PressureLowFill />
      </div>
    </div>
  </div>
  <div class="card-container w-5/6 mx-auto mt-28">
    <CardItem v-for="index in 4" :key="index" :idBlog="index" />
  </div>
  fff
</template>
