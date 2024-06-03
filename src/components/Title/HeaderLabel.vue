<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <text class="font-bold text-lg capitalize">{{ label }}</text>
</template>
