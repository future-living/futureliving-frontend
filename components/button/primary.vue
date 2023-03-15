<script setup>
defineProps({
    title: String,
    link: String,
})
</script>
<template>
    <a :href="link" class="px-6 lg:px-8 py-2 rounded-[4px] bg-title">
        <div class="font-montserrat font-semibold text-sm text-white leading-[30px]">
            {{ title }}
        </div>
    </a>
</template>