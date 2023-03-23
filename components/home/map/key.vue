<script setup>
defineProps({
    text: String
})
</script>

<template>
    <div class="flex flex-row items-center gap-2">
        <div>
            <slot />
        </div>
        <div class="font-montserrat font-normal md:font-medium text-[10px] md:text-[18px] text-key ">
            {{ text.split(': ')[0] }} : <span class="md:font-bold">{{ text.split(': ')[1] }}</span>
        </div>
    </div>
</template>