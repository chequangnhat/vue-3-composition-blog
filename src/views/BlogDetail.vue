<script setup lang="ts">
import { reactive, provide, ref, computed, toRefs } from 'vue'
import CommentList from '@/components/Comment/CommentList.vue'
import RightSidebar from '@/components/Sidebar/RightSidebar.vue'
import CommentForm from '@/components/Comment/CommentForm.vue'
import ContentComponent from '@/components/Content/ContentComponent.vue'
import { tags } from '@/mockData/tags.ts'
import { categories } from '@/mockData/categories.ts'

const sidebarData = reactive({
  tagList: tags,
  categoryList: categories
})
const { tagList, categoryList } = toRefs(sidebarData)
const selectedTag = ref(tagList.value[0].label)

const paragraphContent = computed(() => {
  return tagList.value.find((tag) => tag.label === selectedTag.value)
})

provide('tag', selectedTag)
</script>

<template>
  <div class="blog-detail grid grid-cols-5 gap-20 w-[80%] mx-auto my-10">
    <div class="content col-span-3">
      <ContentComponent />
      <CommentList v-for="number in 2" :key="number" />
      <CommentForm />
    </div>
    <RightSidebar
      :tagList="tagList"
      :paragraph="paragraphContent.content"
      :categoryList="categoryList"
    />
  </div>
</template>
