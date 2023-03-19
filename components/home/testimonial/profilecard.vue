<script setup>
defineProps({
    nama: String,
    jabatan: String,
    company: String,
    imgProfile: String,
})
</script>
<template>
    <div
        class="flex flex-row gap-2 md:gap-3 items-center py-3 px-2  bg-white rounded-lg shadow-[0_2px_24px_0_rgba(26,28,70,0.12)]">
        <div>
            <img class="object-cover rounded-full w-7 h-7 md:w-10 md:h-10" :src="imgProfile" alt="">
        </div>
        <div class="flex flex-col">
            <div class="font-montserrat font-regular md:font-bold text-[12px] md:text-[16px] text-icon ">
                {{ nama }}
            </div>
            <div class="font-montserrat font-regular text-[10px] md:text-[14px] text-bodyText ">
                {{ jabatan }} <span class="font-bold italic">{{ company }}</span>
            </div>
        </div>
    </div>
</template>