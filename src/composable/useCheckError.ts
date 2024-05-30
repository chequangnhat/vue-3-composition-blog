import { reactive } from 'vue'

export const useCheckError = (value: string, isRequired: boolean, max?: number): string[] => {
  const state = reactive<{ errors: string[] }>({
    errors: []
  })
  if (value.length == 0 && isRequired) {
    state.errors.push('Please fill this field')
  }
  if (max && value.length > max) {
    state.errors.push(`Max length is ${max}`)
  }
  return state.errors
}
