<script setup>
defineProps({
    items: Array,
})
</script>
<template>
    <div class="relative flex flex-col gap-28">
      <div class="grid grid-cols-2 gap-[70px] items-center border-solid border-black" v-for="(item, index) in items">
        <div class="" v-if="index % 2 === 0">
          <div class="rounded-lg bg-white p-6 shadow">
            <div class="flex w-fit flex-row items-center  ">
              <div class="font-montserrat text-xl font-bold text-title rounded-lg  p-4 shadow">
                {{ item.year }}
              </div>
              <div class="font-montserrat text-2xl font-semibold ml-3 text-title">
                {{ item.title }}
              </div>
            </div>
            <div class="mt-3 font-montserrat text-base font-bold leading-6 text-bodyText">
              {{ item.text }}
            </div>
          </div>
        </div>
        <div class="" v-if="index % 2 !== 0"></div>

        <div class="absolute right-1/2 left-1/2 flex flex-col items-center justify-center">
          <div class="flex flex-grow h-60 w-1  border-r-4" :class="{ 'border-title': index !== 0, 'border-transparent': index === 0 }"></div>
          <div class="flex h-5 w-5 rounded-full shrink-0 bg-title"></div>
          <div class="flex flex-grow h-60 w-1  border-r-4" :class="{ 'border-title': index !== Object.keys(items).length-1, 'border-transparent': index === Object.keys(items).length-1 }"></div>
        </div>

        <div class="" v-if="index % 2 === 0"></div>
        <div class=" text-left" v-if="index % 2 !== 0">
          <div class="rounded-lg bg-white p-6 shadow">
            <div class="flex w-fit flex-row items-center  ">
              <div class="font-montserrat text-xl font-bold text-title rounded-lg  p-4 shadow">
                {{ item.year }}
              </div>
              <div class="font-montserrat text-2xl font-semibold ml-3 text-title">
                {{ item.title }}
              </div>
            </div>
            <div class="mt-3 font-montserrat text-base font-bold leading-6 text-bodyText">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>