<script setup lang="ts">
// import CardItem from '@/components/Card/CardItem.vue'
import HeaderComponent from '@/components/Header/HeaderComponent.vue'
import { useBlogStore } from '@/stores/blog'
import { onMounted } from 'vue'
const useBlog = useBlogStore()
onMounted(() => {
  useBlog.getAllBlogs()
  console.log(useBlog)
})
</script>

<template>
  <div class="home-container font-poppins w-sreen h-screen bg-gradient-to-tr from-[#F43BF3] via-[#F77EAC] to-[#FAC064] flex flex-col">

    <HeaderComponent />
  
    <div class="h-4/6 w-5/6 xl:max-w-[60%] mx-auto flex flex-col text-white mt-36">
      <span class="text-xl font-normal">Hello! Welcome to</span>
      <span class="text-[12rem] font-bold">Readit blog</span>
      <span class="max-w-[65%] text-lg font-normal"
        >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean.</span
      >
    </div>
<div>
    <Icon icon="meteocons:pressure-low-fill" class="text-white text-2xl" />
    <Icon icon="line-md:chevron-small-triple-down" class="text-white text-3xl" />
<Icon icon="meteocons:pressure-low" width="100" height="100" color="white" style="color: white;"/>

</div>

    <!-- <div v-for="(item, index) in useBlog.blogs" :key="index">
      <CardItem v-if="index < 4" :blog="item" />
    </div> -->
  </div>
fff
</template>
