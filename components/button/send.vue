<script setup>
defineProps({
    title: String,
    link: String,
})
</script>
<template>
    <a :href="link" class="px-5 py-2 rounded-[4px] bg-title">
        <div class="font-montserrat font-semibold text-sm text-white">
            {{ title }}
        </div>
    </a>
</template>