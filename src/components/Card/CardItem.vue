<script setup lang="ts">
import type { BlogType } from '@/types/blog'

defineProps<{
  blog: BlogType
}>()
</script>

<template>
  <div class="w-4/5">
    <a href="blog/1" class="flex flex-col bg-white md:flex-row hover:bg-white">
      <img :src="blog.urlToImage" alt="" class="w-3/5 h-96" />
      <div class="flex flex-col justify-between p-4 leading-normal w-2/5">
        <span class="topic">{{ blog.author }}</span>
        <h3 class="text-3xl font-bold text-black-700 mb-2">{{ blog.title }}</h3>
        <div class="icon-list"></div>
        <div class="publishDate">{{ blog.publishedAt }}</div>
      </div>
    </a>
  </div>
</template>

<style scoped></style>
