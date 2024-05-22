<script setup lang="ts">
import type { BlogType } from '@/types/blog'

defineProps<{
  blog: BlogType
}>()
</script>

<template>
  <div class="card-item group mb-12">
    <a href="blog/1" class="flex justify-center hover:bg-white">
      <img
        src="https://images.unsplash.com/photo-1715942163404-b44e0808536b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        class="w-3/6 h-96 object-cover"
      />
      <div class="flex flex-col justify-between px-4 ml-6 leading-normal w-2/6">
        <span class="topic">ILLUSTRATION</span>
        <h3 class="text-[3rem] font-extrabold text-black-700 text-left">
          Build a website in minutes with Adobe Templates
        </h3>
        <div class="h-9">
          <div class="group-hover:block hidden">
            <div class="icon-list w-40 flex justify-between">
              <div
                class="w-12 h-12 bg-gray-300 hover:bg-orange-200 flex justify-center items-center rounded-lg"
              >
                <Icon icon="uil:twitter" width="25" height="25" />
              </div>
              <div
                class="w-12 h-12 bg-gray-300 hover:bg-orange-200 flex justify-center items-center rounded-lg"
              >
                <Icon icon="ri:facebook-fill" width="32" height="32" />
              </div>
              <div
                class="w-12 h-12 bg-gray-300 hover:bg-orange-200 flex justify-center items-center rounded-lg"
              >
                <Icon icon="iconoir:instagram" width="32" height="32" />
              </div>
            </div>
          </div>
        </div>
        <div class="publishDate">11/13/2019</div>
      </div>
    </a>
  </div>
</template>

<!-- <template>
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
</template> -->

<style scoped></style>
