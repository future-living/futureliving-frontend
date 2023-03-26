<script setup>
defineProps({
    title: String,
})
</script>
<template>
    <button class="px-4 md:px-6 lg:px-8 py-2 rounded-[4px] bg-title">
        <div class="font-montserrat font-medium md:font-semibold text-sm text-white leading-5 md:leading-[30px]">
            {{ title }}
        </div>
    </button>
</template>