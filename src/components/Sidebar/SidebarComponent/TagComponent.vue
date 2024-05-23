<script setup lang="ts">
defineProps<{
  tagName: string
}>()
</script>

<template>
  <span
    class="tag border border-solid border-gray rounded py-[2px] px-2 my-1 mr-2 cursor-pointer hover:border-black capitalize text-xs"
  >
    {{ tagName }}
  </span>
</template>

<style></style>
