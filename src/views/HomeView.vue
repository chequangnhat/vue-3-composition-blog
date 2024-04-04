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
  <div v-for="(item, index) in useBlog.blogs" :key="index">
    <CardItem v-if="index < 4" :blog="item" />
  </div>
</template>
