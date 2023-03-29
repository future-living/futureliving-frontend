<script setup>
defineProps({
    title: String,
    link: String,
})
</script>
<template>
    <div class="w-fit px-4 md:px-6 lg:px-8 py-2 rounded-[4px] bg-title">
        <NuxtLink :to="link">
            <div class="font-montserrat font-medium md:font-semibold text-sm md:text-base text-center text-white">
                {{ title }}
            </div>
        </NuxtLink>
        <div>
            <slot />
        </div>
    </div>
</template>