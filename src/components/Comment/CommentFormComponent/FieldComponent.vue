<script setup lang="ts">
defineProps<{
  label: string
  isRequire?: boolean
}>()
</script>

<template>
  <div class="flex flex-col py-3 text-lg">
    <label :for="label">{{ label }} <span v-show="isRequire">*</span></label>
    <input :id="label" type="text" class="rounded border p-2" />
  </div>
</template>

<style></style>
