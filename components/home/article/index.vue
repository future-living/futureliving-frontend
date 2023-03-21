<script setup>
const article = [
    {
        id: 1,
        imgPost: "/article1.png",
        name: "Dianne Russel",
        imgProfile: "/user2.webp",
        title: "Developer Properti Terbaik Tahun 2022",
        time: "2 Menit | 25 September 2022",
    },
    {
        id: 2,
        imgPost: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        name: "Dianne Russel",
        imgProfile: "/user3.webp",
        title: "Hal Yang harus Diperhatikan Ketika Membeli Sebuah Rumah",
        time: "4 Menit | 13 Oktober 2022",
    },
    {
        id: 3,
        imgPost: "https://images.unsplash.com/photo-1531077386034-d12285794b5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        name: "Dianne Russel",
        imgProfile: "/user4.webp",
        title: "7 Cara Agar Terhindar Dari Penipuan Bisnis Properti",
        time: "3 Menit | 25 Agustus 2022",
    },
    {
        id: 4,
        imgPost: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        name: "Dianne Russel",
        imgProfile: "/user1.webp",
        title: "Cara Terbaik Mengetahui Kualitas Rumah Yang Ingin Kita Beli",
        time: "5 Menit | 25 Juni 2022",
    },
    {
        id: 5,
        imgPost: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        name: "Dianne Russel",
        imgProfile: "/user1.webp",
        title: "Cara Terbaik Mengetahui Kualitas Rumah Yang Ingin Kita Beli",
        time: "5 Menit | 25 Juni 2022",
    },


];

</script>
<template>
    <div class="navigation-wrapper flex flex-col gap-10 justify-center">
        <div
            class="font-montserrat font-semibold md:font-bold text-2xl md:text-[44px] text-title text-center leading-[30px] md:leading-[54px]">
            Artikel
        </div>
        <div class="flex flex-col gap-8">
            <div class="relative flex flex-col">
                <img :src="article[0].imgPost" alt=""
                    class="object-cover rounded w-full h-[203px] md:h-[381px] lg:h-[421px]">
                <div
                    class="absolute w-full p-4 bottom-0 flex flex-col bg-gradient-to-t from-black to-transparent gap-[2px] md:gap-[6px]  rounded">
                    <div class="flex flex-row items-center gap-1">
                        <img class="object-cover rounded-full w-5 md:w-7" :src="article[0].imgProfile" alt="">
                        <div class="font-montserrat font-medium md:font-medium text-xs md:text-[20px] text-white">
                            {{ article[0].name }}
                        </div>
                    </div>
                    <div
                        class="font-montserrat font-medium md:font-semibold text-xs md:text-[28px] text-white  md:leading-[34px]">
                        {{ article[0].title }}
                    </div>
                    <div class="flex flex-row items-center gap-1">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-3 h-3 md:w-[18px] md:h-[18px] stroke-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div
                            class="font-montserrat font-normal text-[10px] md:text-[16px] text-white leading-[22px] md:leading-[26px] align-middle">
                            {{ article[0].time }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row gap-6">
                <template v-for="(post, index) in article">
                    <template v-if="index > 0">
                        <div class="flex flex-row lg:flex-col gap-4">
                            <div
                                class="max-w-[40%] max-h-[90px] md:max-w-[30%] md:max-h-[124px] lg:max-w-prose lg:min-h-[260px]">
                                <img :src="post.imgPost" alt="" class="object-cover rounded w-full h-full">
                            </div>
                            <div class="flex flex-col gap-2 md:gap-3 w-full">
                                <div class="flex flex-row items-center gap-1">
                                    <img class="object-cover rounded-full w-[18px] h-[18px] md:w-[32px] md:h-[32px]"
                                        :src="post.imgProfile" alt="">
                                    <div class="font-montserrat font-medium text-[10px] md:text-[20px] text-bodyText">
                                        {{ post.name }}
                                    </div>
                                </div>
                                <div class="font-montserrat font-medium text-[10px] md:text-[20px] text-title">
                                    {{ post.title }}
                                </div>
                                <div class="flex flex-row items-center gap-1">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="w-4 h-4  md:w-[18px] md:h-[18px] stroke-placeholder">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div
                                        class="font-montserrat font-normal  text-[10px]  md:text-[12px] text-bodyText leading-[24px] align-middle">
                                        {{ post.time }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>