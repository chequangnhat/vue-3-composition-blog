<script setup lang="ts">
import CardItem from '@/components/Card/CardItem.vue'
import { useBlogStore } from '@/stores/blog'
import { onMounted } from 'vue'
const useBlog = useBlogStore()
onMounted(() => {
  useBlog.getAllBlogs()
})
</script>

<template>
  <div class="home-container ">
    <div class="home-header">
      <div>Readit.</div>
      <div>
        <div>Home</div>
        <div>Articles</div>
        <div>Team</div>
        <div>Contact</div>
      </div>
    </div>
    <div>
      <span>Hello! Welcome to</span>
      <span>Readit blog</span>
      <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</span>
    </div>
    <div v-for="(item, index) in useBlog.blogs" :key="index">
      <CardItem v-if="index < 4" :blog="item" />
    </div>
  </div>
</template>
