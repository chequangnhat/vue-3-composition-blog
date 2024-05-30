<script setup lang="ts">
defineProps<{
  label: string
  isRequire?: boolean
  modelValue: string
  errors: string[]
}>()
const emit = defineEmits(['update:modelValue'])

const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}
</script>

<template>
  <div class="flex flex-col py-3 text-lg">
    <label :for="label">
      {{ label }}
      <span v-show="isRequire">*</span>
    </label>
    <textarea
      :id="label"
      type="text"
      :value="modelValue"
      @input="onInput"
      class="rounded border p-2"
    />
    <div class="text-sm text-red-600 p-1" v-for="error in errors" :key="error">
      {{ error }}
    </div>
  </div>
</template>

<style></style>
