<script setup>
import CommentList from '@/components/Comment/CommentList.vue'
import ContentText from '@/components/Content/ContentText.vue'
import RightSidebar from '@/components/Sidebar/RightSidebar.vue'
import CommentForm from '@/components/Comment/CommentForm.vue'
</script>
<template>
  <div class="blog-detail grid grid-cols-5 gap-6 w-[80%] mx-auto my-10">
    <div class="content col-span-3">
      <ContentText />
      <CommentList v-for="number in 2" :key="number" />
      <CommentForm />
    </div>
    <RightSidebar />
  </div>
</template>

<style></style>
