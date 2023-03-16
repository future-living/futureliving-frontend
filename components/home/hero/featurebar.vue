<script setup>
defineProps({
    title: String,
    description: String,
})
</script>
<template>
    <div class="flex flex-row items-center py-5 px-3 gap-1 bg-white shadow-lg rounded-lg">
        <div>
            <slot />
        </div>
        <div class="flex flex-col ">
            <div class="font-montserrat font-bold text-lg text-title leading-[22px] ">
                {{ title }}
            </div>
            <div class="font-montserrat font-bold text-xs text-[#525A6A] leading-[16px] ">
                {{ description }}
            </div>
        </div>
    </div>
</template>