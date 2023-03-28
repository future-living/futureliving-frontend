<script setup>
defineProps({
    title: String,
    content: String,
})
</script>

<template>
    <div
        class="flex flex-row p-2 gap-1 md:p-4 md:gap-2 items-center bg-white rounded-md md:rounded-xl shadow-[0_2px_24px_10px_rgba(26,28,70,0.05)] transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:cursor-pointer">
        <div>
            <slot />

        </div>
        <div class="flex flex-col">
            <div
                class="font-montserrat font-medium md:font-semibold text-[10px] md:text-[24px] text-medsos group-hover:text-white">
                {{ title }}
            </div>
            <div
                class="font-montserrat font-semibold md:font-bold text-[8px] md:text-[16px] text-bodyText group-hover:text-white">
                {{ content }}
            </div>
        </div>
    </div>
</template>