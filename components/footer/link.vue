<script setup>
defineProps({
    title: String,
    link: String,
})
</script>

<template>
    <a :href="link">
        <div class="font-montserrat font-medium text-base text-white">
            {{ title }}
        </div>
    </a>
</template>