<script setup lang="ts">
import IconChevronRight from '@/components/icons/IconChevronRight.vue'
defineProps<{
  category: string
}>()
</script>

<template>
  <div
    class="cursor-pointer flex justify-between items-center border-b-[1px] border-solid border-grey ease-in-out duration-300 hover:text-yellow-500 py-2"
  >
    <div class="text">{{ category }}</div>
    <IconChevronRight />
  </div>
</template>
