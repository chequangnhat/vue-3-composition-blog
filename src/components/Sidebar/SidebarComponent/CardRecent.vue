<script setup lang="ts">
import IconCalendar from '@/components/icons/IconCalendar.vue'
</script>

<template>
  <div class="flex my-4 cursor-pointer">
    <img
      src="https://th.bing.com/th/id/OIP.qTZy3GY7CH0AlxsviHRmXQHaE2?rs=1&pid=ImgDetMain"
      class="w-[80px] h-[80px] mr-6"
    />
    <div class="description flex flex-col justify-between">
      <div class="title font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
      <div class="date flex items-end text-xs text-gray-400">
        <IconCalendar class="mr-2" />
        Nov. 14, 2019
      </div>
    </div>
  </div>
</template>
