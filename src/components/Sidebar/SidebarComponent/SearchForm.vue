<script setup>
import IconSearch from '@/components/icons/IconSearch.vue'
</script>

<template>
  <div
    class="border border-solid border-black-50 p-3 rounded flex items-center justify-between w-full mb-5"
  >
    <input
      type="search"
      id="search-dropdown"
      class="outline-none min-w-[220px]"
      placeholder="Type a keyword and hit enter"
    />
    <button type="submit" class="">
      <IconSearch />
    </button>
  </div>
</template>

<style></style>
