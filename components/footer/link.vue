<script setup>
defineProps({
    title: String,
    link: String,
})
</script>

<template>
    <NuxtLink :to="link">
        <div class="font-montserrat font-medium text-base text-white">
            {{ title }}
        </div>
    </NuxtLink>
</template>