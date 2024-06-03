<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <p class="font-medium text-3xl py-3">{{ title }}</p>
</template>
