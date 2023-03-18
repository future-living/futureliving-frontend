<script setup>
defineProps({
    nama: String,
    kota: String,
    image: String,
})
</script>
<template>
    <div class="snap-always snap-center min-w-full  bg-[#F3F1F4]">
        <div class="flex flex-col mt-8 ml-8 gap-6 md:gap-16 ">
            <div class="flex flex-col gap-1">
                <div
                    class="font-montserrat font-bold md:font-semibold text-base md:text-2xl text-bodyText leading-[20px] md:leading-[29px]">
                    {{ nama }}
                </div>
                <div class="flex flex-row gap-1">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>

                    </div>
                    <div>
                        <div
                            class="font-montserrat font-normal text-[10px] md:text-sm text-bodyText leading-[24px] md:leading-[26px]">
                            {{ kota }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-6 pl-6 bg-card rounded-tl-lg">
                <img class="object-cover h-[353px] md:h-[390px] w-full rounded-tl-lg rounded-br-lg " :src="image" alt="">
            </div>
        </div>
    </div>
</template>