<script setup>
defineProps({
    title: String,
    link: String,
})
</script>
<template>
    <NuxtLink :to="link" class="px-4 md:px-6 lg:px-8 py-2 rounded-[4px] bg-title">
        <div class="font-montserrat font-medium md:font-semibold text-sm md:text-base text-center text-white">
            {{ title }}
        </div>
    </NuxtLink>
</template>