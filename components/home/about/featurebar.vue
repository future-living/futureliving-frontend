<script setup>
defineProps({
    title: String,
    description: String,
})
</script>
<template>
    <div class="flex flex-col p-2 md:p-4 md:gap-[2px] bg-white shadow-md rounded-lg">
        <div
            class="font-montserrat font-medium md:font-bold text-base md:text-[32px] text-title leading-[20px] md:leading-[39px] ">
            {{ title }}
        </div>
        <div
            class="font-montserrat font-light md:font-medium  text-xs md:text-base text-[#525A6A] leading-[24px] md:leading-[20px] ">
            {{ description }}
        </div>
    </div>
</template>