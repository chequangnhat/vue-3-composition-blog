<script setup>
import FieldComponent from './CommentFormComponent/FieldComponent.vue'
import TextareaComponent from './CommentFormComponent/TextareaComponent.vue'
</script>

<template>
  <div class="bg-gray-50 p-9">
    <FieldComponent label="Name" isRequire />
    <FieldComponent label="Email" isRequire />
    <FieldComponent label="Website" />
    <TextareaComponent label="Message" />
    <button class="bg-amber-300 py-3 px-4 rounded text-white capitalize hover:bg-amber-200">
      Post Comment
    </button>
  </div>
</template>

<style></style>
