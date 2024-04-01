import type { BlogType } from "@/types/BlogType";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBlogStore = defineStore('blog', () => {
  const blog = ref<BlogType[]>([])
  return {
    blog
  }
})
