<script setup lang="ts">
defineProps<{
  tagName: string
}>()
</script>

<template>
  <div
    class="tag border border-solid border-gray rounded w-fit py-[2px] px-2 hover:border-black capitalize"
  >
    {{ tagName }}
  </div>
</template>

<style></style>
