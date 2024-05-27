<script setup>
import { reactive } from 'vue'
import SearchForm from './SidebarComponent/SearchForm.vue'
import CategoryComponent from './SidebarComponent/CategoryComponent.vue'
import HeaderLabel from '../Title/HeaderLabel.vue'
import CardRecent from './SidebarComponent/CardRecent.vue'
import TagComponent from './SidebarComponent/TagComponent.vue'

const state = reactive({
  tags: ['CAT', 'ABSTRACT', 'PEOPLE', 'PERSON', 'MODEL', 'DELICIOUS', 'DESSERTS', 'DRINKS'],
  categories: ['Illustration', 'Branding', 'Application', 'Design', 'Marketing']
})
</script>

<template>
  <div class="sidebar col-span-2 flex-col">
    <div class="search mb-10">
      <SearchForm />
    </div>
    <div class="categories mb-10">
      <HeaderLabel label="categories" />
      <CategoryComponent
        v-for="category in state.categories"
        :key="category"
        :category="category"
      />
    </div>
    <div class="blog-recent mb-10">
      <HeaderLabel label="recent blog" />
      <CardRecent v-for="number in 3" :key="number" />
    </div>
    <div class="tag mb-10">
      <HeaderLabel label="Tag Cloud" />
      <div class="flex flex-row flex-wrap text-xs">
        <TagComponent v-for="tag in state.tags" :key="tag" :tagName="tag" />
      </div>
    </div>
    <div class="tag mb-10">
      <HeaderLabel label="Paragraph" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias veritatis
        illum vel, reprehenderit modi doloribus adipisci commodi repellat aliquid! Sapiente porro
        quam aspernatur illum earum vel consectetur enim quasi?
      </p>
    </div>
  </div>
</template>

<style></style>
