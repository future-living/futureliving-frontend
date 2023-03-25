<script setup>
defineProps({
    nama: String,
    kategori: Array,
    image: String,
})
// console.log(kategori)
</script>
<template>
    <div class="rounded-lg  bg-[#F3F1F4] ">
        <div class="flex flex-col mt-8 ml-8 gap-6 md:gap-16 ">
            <div class="flex flex-col gap-1">
                <div
                    class="font-montserrat font-semibold md:font-semibold text-2xl text-icon">
                    {{ nama }}
                </div>
                <div class="flex flex-row gap-[5px] my-5 items-center">
                    <div v-for="k in kategori"
                        class="flex justify-center items-center  bg-transparent rounded-full text-chips  border-[1px] border-chips min-w-[70px] whitespace-nowrap">
                        <div class="text-[10px] font-semibold leading-none max-w-full flex-initial my-[6px]">{{ k }}</div>
                    </div>
                </div>
                <div class="pt-6 pl-6 bg-card rounded-tl-lg">
                    <img class="object-cover h-[356px]  w-full rounded-tl-lg rounded-br-lg " :src="image" alt="">
                </div>
            </div>
        </div>
    </div>
</template>