<script setup lang="ts">
import SearchForm from './SidebarComponent/SearchForm.vue'
import CategoryComponent from './SidebarComponent/CategoryComponent.vue'
import HeaderLabel from '../Title/HeaderLabel.vue'
import CardRecent from './SidebarComponent/CardRecent.vue'
import TagComponent from './SidebarComponent/TagComponent.vue'
import type { TagType } from '@/types/tag.ts'

defineProps<{
  tagList: TagType[]
  paragraph: string
  categoryList: string[]
}>()
</script>

<template>
  <div class="sidebar col-span-2 flex-col">
    <div class="search mb-10">
      <SearchForm />
    </div>
    <div class="categories mb-10">
      <HeaderLabel label="categories" />
      <CategoryComponent v-for="category in categoryList" :key="category" :category="category" />
    </div>
    <div class="blog-recent mb-10">
      <HeaderLabel label="recent blog" />
      <CardRecent v-for="number in 3" :key="number" />
    </div>
    <div class="tag mb-10">
      <HeaderLabel label="Tag Cloud" />
      <div class="flex flex-row flex-wrap text-xs">
        <TagComponent v-for="tag in tagList" :key="tag" :tagName="tag.label" />
      </div>
    </div>
    <div class="tag mb-10">
      <HeaderLabel label="Paragraph" />
      <p>
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<style></style>
