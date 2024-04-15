<script setup lang="ts">
import CardItem from '@/components/Card/CardItem.vue'
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
  <div class="home-container w-full h-screen bg-gradient-to-tr from-[#F437F8] to-[#FABD67] pt-10">
    <HeaderComponent />
    <div>
      <span>Hello! Welcome to</span>
      <span>Readit blog</span>
      <span
        >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean.</span
      >
    </div>
    <div v-for="(item, index) in useBlog.blogs" :key="index">
      <CardItem v-if="index < 4" :blog="item" />
    </div>
  </div>
  đ
</template>
