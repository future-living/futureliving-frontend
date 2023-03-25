<script setup>
defineProps({
    nama: String,
    jabatan: String,
    img: String,
})
</script>
<template>
    <div class=" flex flex-col items-center gap-6 md:gap-16 lg:gap-20 pb-10">
        <img class="object-cover h-[364px] w-[310px] rounded-lg" :src="img" alt="">
        <div class="absolute bottom-0 rounded-lg p-4 bg-white items-center flex flex-col min-w-[182px]">
            <div class="font-bold font-montserrat text-base text-title">{{ nama }}</div>
            <div class="font-montserrat text-sm text-[#858D9D]">{{ jabatan }}</div>
        </div>
    </div>
</template>