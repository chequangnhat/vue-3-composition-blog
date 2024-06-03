<script setup lang="ts">
defineProps<{
  onClick: () => void
}>()
</script>
<template>
  <button
    :onclick="onClick"
    class="bg-amber-300 py-3 px-4 rounded text-white capitalize hover:bg-amber-200"
  >
    Post Comment
  </button>
</template>
