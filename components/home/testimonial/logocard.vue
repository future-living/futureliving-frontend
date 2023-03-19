<script setup>
defineProps({
    imgProperti: String
})
</script>
<template>
    <div class="p-2 md:p-4 rounded-lg bg-white shadow-[0_2px_24px_0_rgba(26,28,70,0.12)]">
        <img class="h-[26px]" :src="imgProperti" alt="">
    </div>
</template>