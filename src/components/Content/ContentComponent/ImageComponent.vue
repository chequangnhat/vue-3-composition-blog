<script setup lang="ts">
defineProps<{
  srcImg: string
}>()
</script>

<template>
  <img :src="srcImg" alt="" w-full />
</template>

<style></style>
