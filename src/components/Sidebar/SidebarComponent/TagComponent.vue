<script setup lang="ts">
import { inject, computed, type Ref } from 'vue'

const props = defineProps<{
  tagName: string
}>()

const selectedTag: Ref<string> | undefined = inject('tag')

const defaultStyle =
  'border border-solid rounded py-[2px] px-2 my-1 mr-2 cursor-pointer capitalize text-xs'
const classStyle = computed(() => {
  return selectedTag?.value === props.tagName
    ? `${defaultStyle} hover:border-yellow-500 text-white bg-yellow-500`
    : `${defaultStyle} border-gray hover:border-yellow-500`
})

const updateTag = () => {
  if (selectedTag) {
    selectedTag.value = props.tagName
  }
}
</script>

<template>
  <button :class="classStyle" :onclick="updateTag">
    {{ tagName }}
  </button>
</template>
