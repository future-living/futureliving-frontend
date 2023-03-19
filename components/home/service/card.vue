<script setup>
defineProps({
    title: String,
    description: String
})
</script>
<template>
    <div
        class="flex flex-col md:flex-row lg:flex-col p-6 gap-4 justify-center rounded-lg shadow-[0_2px_24px_10px_rgba(26,28,70,0.05)]">
        <div class="mx-auto lg:mx-0">
            <slot />
        </div>
        <div class="flex flex-col gap-2">
            <div
                class="font-montserrat font-medium md:font-semibold text-xl md:text-2xl text-title text-center md:text-left leading-[24px] md:leading-[29px]">
                {{ title }}
            </div>
            <div
                class="font-montserrat font-medium md:font-normal text-xs md:text-sm text-bodyText text-center md:text-left leading-[24px] md:leading-[26px]">
                {{ description }}
            </div>
        </div>
    </div>
</template>