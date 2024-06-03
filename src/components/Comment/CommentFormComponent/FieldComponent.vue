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
    <label :for="label">{{ label }} <span v-show="isRequire">*</span></label>
    <input
      :id="label"
      type="text"
      class="rounded border p-2"
      :value="modelValue"
      @input="onInput"
    />
    <div class="text-sm text-red-600 p-1" v-for="error in errors" :key="error">
      {{ error }}
    </div>
  </div>
</template>
