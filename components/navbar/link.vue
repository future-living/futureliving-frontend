<script setup>
defineProps({
    title: String,
    link: String,
})
</script>

<template>
    <NuxtLink :to="link">
        <div class="font-montserrat font-light lg:font-normal text-sm text-center text-title leading-6 transition-all ease-in-out delay-150 hover:font-semibold hover:underline hover:underline-offset-2">
            {{ title }}
        </div>
    </NuxtLink>
</template>