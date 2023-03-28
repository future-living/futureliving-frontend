<script setup>
defineProps({
    title: String,
})
</script>
<template>
    <button class="px-4 md:px-6 lg:px-8 py-2 lg:py-4 rounded-[4px] bg-title">
        <div
            class="font-montserrat font-medium md:font-semibold text-sm md:text-[24px] text-white leading-[29px] md:leading-[30px]">
            {{ title }}
        </div>
    </button>
</template>