<script setup>
defineProps({
    title: String
})
</script>
<template>
    <div
        class="flex flex-row gap-1 items-center py-2 px-4 md:py-4 md:px-5 bg-white rounded-[4px] md:rounded-[8px] shadow-md">
        <div>
            <slot />
        </div>
        <div
            class="font-montserrat font-medium text-[12px] md:text-[16px] text-title leading-[12px] group-hover:text-white">
            {{ title }}
        </div>
    </div>
</template>