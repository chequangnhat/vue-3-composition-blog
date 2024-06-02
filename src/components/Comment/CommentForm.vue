<script setup lang="ts">
import { reactive, toRefs, ref, watch } from 'vue'
import FieldComponent from './CommentFormComponent/FieldComponent.vue'
import TextareaComponent from './CommentFormComponent/TextareaComponent.vue'
import ButtonComponent from './CommentFormComponent/ButtonComponent.vue'
import { useCheckError } from '@/composable/useCheckError'
import type { ERROR_TYPE } from '@/types/errors'

const comment = reactive({
  name: '',
  email: '',
  website: '',
  message: ''
})
const errors = reactive<ERROR_TYPE>({
  nameError: [],
  emailError: [],
  websiteError: [],
  messageError: []
})
const { name, email, website, message } = toRefs(comment)
const { nameError, emailError, websiteError, messageError } = toRefs(errors)
const isOpenModal = ref(false)

const openModal = () => {
  if (checkError()) {
    isOpenModal.value = true
  }
}

const sendComment = () => {
  name.value = ''
  email.value = ''
  website.value = ''
  message.value = ''
  closeModal()
}

const closeModal = () => {
  isOpenModal.value = false
}

const checkError = () => {
  nameError.value = useCheckError(name.value, true, 50)
  emailError.value = useCheckError(email.value, true, 50)
  websiteError.value = useCheckError(website.value, false, 50)
  messageError.value = useCheckError(message.value, true, 250)
  return isObjectOfEmptyArrays(errors)
}

const isObjectOfEmptyArrays = (obj: ERROR_TYPE): boolean => {
  return Object.values(obj).every((array) => Array.isArray(array) && array.length === 0)
}

watch(name, () => (nameError.value = []))
watch(email, () => (emailError.value = []))
watch(website, () => (websiteError.value = []))
watch(message, () => (messageError.value = []))
</script>

<template>
  <div class="bg-gray-50 p-9">
    <FieldComponent label="Name" isRequire v-model="name" :errors="nameError" />
    <FieldComponent label="Email" isRequire v-model="email" :errors="emailError" />
    <FieldComponent label="Website" v-model="website" :errors="websiteError" />
    <TextareaComponent label="Message" v-model="message" :errors="messageError" />
    <ButtonComponent :onClick="openModal" />
  </div>
  <Teleport to="#modal">
    <div
      v-show="isOpenModal"
      class="w-full h-full fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center align-middle bg-black/70"
    >
      <div class="bg-white p-10 rounded w-[50%] flex flex-col">
        <div>
          <h1 class="capitalize font-semibold">Confirm the content you will post</h1>
          <div class="tacgia">Author: {{ name }}</div>
          <div class="tacgia">Email: {{ email }}</div>
          <div>Message: {{ message }}</div>
        </div>
        <div class="mt-4 flex justify-end">
          <button class="rounded mr-4 px-4 py-2 bg-amber-300 text-white" :onclick="sendComment">
            Send
          </button>
          <button class="rounded px-4 py-2 bg-gray-500 text-white" :onclick="closeModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
