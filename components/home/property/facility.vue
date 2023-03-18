<script setup>
defineProps({
    title: String
})
</script>
<template>
    <div class="flex flex-row gap-1 md:gap-4 items-center w-fit ">
        <div class="w-4 md:w-6">
            <slot />
        </div>
        <div class="font-montserrat font-normal  text-[10px] md:text-[16px] text-bodyText leading-[24px]">
            {{ title }}
        </div>
    </div>
</template>