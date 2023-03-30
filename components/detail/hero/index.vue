<script setup>
const emit = defineEmits(['handleTour3d', 'handleVideoTour'])

const showTour = () => {
    emit('handleTour3d')
}

const showVideoTour = () => {
    emit('handleVideoTour')
}

const kategori = ["Mid-Class", "Modern", "Terlaris", "Minimalis"];
const fasilitas = [
    {
        title: "Alarm Kebakaran",
        logo: "/_nuxt/assets/img/alarm.png",
    },
    {
        title: "Keamanan",
        logo: "/_nuxt/assets/img/shield.png",
    },
    {
        title: "Masjid",
        logo: "/_nuxt/assets/img/mosque.png",
    },
    {
        title: "Taman Bermain",
        logo: "/_nuxt/assets/img/play.png",
    },
    {
        title: "Kolam Renang",
        logo: "/_nuxt/assets/img/pool.png",
    },
    {
        title: "Gym",
        logo: "/_nuxt/assets/img/barbel.png",
    }
];
const detail = [
    {
        title: "L.T 150 M",
        logo: "/_nuxt/assets/img/land-plots.png",
    },
    {
        title: "2 Kamar Tidur",
        logo: "/_nuxt/assets/img/bed.png",
    },
    {
        title: "1 Dapur",
        logo: "/_nuxt/assets/img/kitchen.png",
    },
    {
        title: "1 Garasi",
        logo: "/_nuxt/assets/img/garage.png",
    },
    {
        title: "1 Ruang Keluarga",
        logo: "/_nuxt/assets/img/living-room.png",
    }
];
</script>
<template>
    <div class="grid lg:grid-cols-5 gap-16">
        <div class="lg:col-span-3">
            <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 relative">
                    <img src="https://images.unsplash.com/photo-1591170715502-fbc32adc4f52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="" class="object-cover rounded lg:h-[586px]">
                    <div class="absolute flex flex-row justify-center gap-2 w-full -bottom-[16px] md:-bottom-[28px] z-10">
                        <HomePropertyImagebutton
                            class="group hover:cursor-pointer transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:bg-title  duration-300"
                            @click="showVideoTour" title="Play Video">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 md:w-6 md:h-6 stroke-title group-hover:stroke-white ">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                </svg>

                            </div>
                        </HomePropertyImagebutton>
                        <HomePropertyImagebutton
                            class="group hover:cursor-pointer transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-title  duration-300"
                            @click="showTour" title="360 Tour">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4 md:w-6 md:h-6 stroke-title group-hover:stroke-white">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>
                        </HomePropertyImagebutton>
                    </div>
                </div>
                <div class=""><img
                        src="https://images.squarespace-cdn.com/content/v1/5fbe6daad27ff856c2dfe101/1628967382988-3CBEQ505AWNY97PRP0W3/A+guide+to+single-storey+extensions.jpg?format=1000w"
                        alt="" class="object-cover rounded "></div>
                <div class=""><img
                        src="https://c.pxhere.com/images/ca/14/e67b9cd9a1946f2a10bc429cfaf7-1632935.jpg!d"
                        alt="" class="object-cover rounded  "></div>
                <div class=""><img
                        src="https://q5q4x4m3.stackpathcdn.com/wp-content/uploads/2021/11/68f94a_b70111d49e364d22b9c76135260c1f69_mv2-1920x1280.jpg"
                        alt="" class="object-cover rounded "></div>
            </div>
        </div>
        <div class="flex flex-col w-full gap-2 lg:col-span-2 items-center lg:items-start">
            <div class="font-montserrat font-bold text-title text-base">Bungalow Home I</div>
            <div class="font-montserrat font-bold text-title text-[44px] leading-10">Lavenia</div>
            <div class="flex flex-row gap-[5px] items-center">
                <div v-for="k in kategori"
                    class="flex justify-center items-center  bg-transparent rounded-full text-chips  border-[1px] border-chips min-w-[70px] whitespace-nowrap">
                    <div class="text-[10px] font-semibold leading-none max-w-full flex-initial my-[6px]">{{ k }}</div>
                </div>
            </div>
            <div class="font-montserrat font-bold text-title text-base">Jl. Pegangsaan Timur no. 12</div>
            <div class="font-montserrat font-bold lg:font-medium text-title text-base lg:text-xl mt-8 mb-3">Fasilitas Umum</div>
            <div class="grid grid-cols-3 lg:grid-cols-2 gap-3">
                <div v-for="(item, index) in fasilitas" :key="index">
                    <DetailHeroFacility :title=item.title>
                        <img :src=item.logo :alt=item.title>
                    </DetailHeroFacility>
                </div>
            </div>
            <div class="font-montserrat font-bold lg:font-medium text-title text-base lg:text-xl mt-8 mb-3">Detail Rumah</div>
            <div class="grid grid-cols-3 lg:grid-cols-2 gap-3">
                <div v-for="(item, index) in detail" :key="index">
                    <DetailHeroFacility :title=item.title>
                        <img :src=item.logo :alt=item.title>
                    </DetailHeroFacility>
                </div>
            </div>
            <div class="font-montserrat font-bold text-title text-base  mt-8">Deskripsi</div>
            <div class="font-montserrat font-normal text-[#3D4350] text-base text-center lg:text-left">Type Lavenia adalah tipe rumah yang cocok untuk Anda yang mencari tipe rumah minimalis dengan gaya modern. Sangat cocok untuk Anda yang selalu ingin dekat dengan keluarga kecil Anda. </div>
            <ButtonPrimary title='Buat Janji' class="mt-10 w-full"/>
        </div>
    </div>
</template>