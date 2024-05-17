<script setup>
import CardRecent from '@/components/Card/CardRecent.vue'
import SearchForm from '@/components/Search/SearchForm.vue'
import HeaderLabel from '@/components/Title/HeaderLabel.vue'
import TagComponent from '@/components/Tag/TagComponent.vue'
import CategoryComponent from '@/components/Category/CategoryComponent.vue'
import { useBlogStore } from '@/stores/blog'
import { onMounted } from 'vue'

const useBlog = useBlogStore()
onMounted(() => {
  useBlog.getAllTags()
})
</script>
<template>
  <div class="blog-detail grid grid-cols-5 gap-6">
    <div class="content col-span-3">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nihil blanditiis ut, optio
      sunt quisquam quibusdam maiores, laudantium architecto ipsam aspernatur? Et iste optio aut?
      Veritatis ad sint laboriosam obcaecati!
    </div>
    <div class="sidebar col-span-2 flex-col">
      <div class="search mb-10">
        <SearchForm />
      </div>
      <div class="categories mb-10">
        <HeaderLabel label="categories" />
        <CategoryComponent />
      </div>
      <div class="blog-recent mb-10">
        <HeaderLabel label="recent blog" />
        <CardRecent />
      </div>
      <div class="tag mb-10">
        <HeaderLabel label="Tag Cloud" />
        <div :v-for="(item, index) in useBlog.tags" key="index">
          <TagComponent :tagName="item" />
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
  </div>
</template>

<style></style>
