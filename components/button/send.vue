<script setup>
defineProps({
    title: String,
})
</script>
<template>
    <button class="px-5 py-2 rounded-[4px] bg-title">
        <div class="font-montserrat font-semibold text-sm text-white">
            {{ title }}
        </div>
    </button>
</template>