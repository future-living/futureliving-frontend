<script setup>
defineProps({
    title: String,
    link: String,
})
</script>

<template>
    <a :href="link">
        <div class="font-montserrat font-light lg:font-normal text-sm text-title leading-6">
            {{ title }}
        </div>
    </a>
</template>