<script setup>
defineProps({
    caption: String,
    testimoni: String,
})
</script>
<template>
    <div
        class="flex flex-col gap-2 items-center p-3 md:p-4 bg-white rounded-lg shadow-[0_9px_32px_0_rgba(26,28,70,0.05)] md:max-w-[612px]">
        <div class="flex flex-col gap-1">
            <div
                class="font-montserrat font-medium md:font-semibold text-center md:text-left text-[12px] md:text-[24px] text-icon ">
                {{ caption }}
            </div>
            <div
                class="font-montserrat font-regular text-center md:text-left text-[12px] md:text-[16px] text-bodyText leading-[24px] md:leading-[26px] ">
                {{ testimoni }}
            </div>
        </div>
    </div>
</template>