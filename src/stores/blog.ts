import { axiosAPI } from "@/api/axios";
import type { BlogType, BlogResponse } from "@/types/blog";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBlogStore = defineStore('blog', () => {
  const blogs = ref<BlogType[]>([])
  const getAllBlogs = async () => {
    const response: BlogResponse = await axiosAPI.get('https://newsapi.org/v2/everything?q=tesla&from=2024-03-04&sortBy=publishedAt&apiKey=aab94128fefa4ae989025d0c6541500c')
    blogs.value = response.articles
  }
  return {
    blogs,
    getAllBlogs
  }
})
