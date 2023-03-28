<script setup>
const properties = [
    {
        id: 1,
        nama: "Perumahan Bungalow I",
        slogan: "Modern dan Nyaman",
        deskripsi:
            "Cluster sederhana yang mengakrabkan keluarga  kecil yang bahagia. Cocok untuk Anda yang menginginkan rumah mungil namun elegan, dengan harga yang bersahabat. Dengan akses mudah ke berbagai fasilitas umum. Salah satu penjualan terbaik kami.",
        img: "/bungalo1.jpg",
    },
    {
        id: 2,
        nama: "Perumahan Bungalow II",
        slogan: "Mudah dan Sederhana",
        deskripsi:
            "Hunian idaman bagi keluarga kecil Anda yang penuh kehangatan. Memiliki 2 lantai dan taman yang luas, cocok untuk mengukir kenangan indah bersama keluarga Anda. Gaya modern & minimalis dengan berbagai fasilitas dapat Anda miliki dengan harg yang terjangkau.",
        img: "/bungalo2.jpg",
    },
    {
        id: 3,
        nama: "Perumahan Bungalow III",
        slogan: "Elit dan Elok",
        deskripsi:
            "Hunian eksklusif untuk Anda & keluarga dengan berbagai kemewahan yang ditawarkan. Bungalow 3 hadir di Bandung Timur dengan 2 lantai dikelilingi oleh ventilasi yang memudahkan cahaya matahari masuk sehingga menghasilkan sirkulasi udara yang baik.",
        img: "/bungalo3.jpg",
    },
];

const emit = defineEmits(['handleTour3d', 'handleVideoTour'])

const showTour = () => {
    emit('handleTour3d')
}

const showVideoTour = () => {
    emit('handleVideoTour')
}

const geser = ref(0)

const posisi = ref("scrolling-0")

const keKanan = () => {
    geser.value = geser.value + 1
    posisi.value = `scrolling-${geser.value}`
}

const keKiri = () => {
    geser.value = geser.value - 1
    posisi.value = `scrolling-${geser.value}`
}

const listItem = (id) => {
    if ((id % 2) == 1) {
        return "lg:flex-row-reverse"
    } else {
        return "lg:flex-row"
    }
}


</script>
<template>
    <div class="flex flex-col py-16 lg:py-0 gap-10">
        <div
            class="font-montserrat font-semibold md:font-bold text-2xl md:text-[44px] text-title text-center leading-[30px] md:leading-[54px]">
            Properti Kami
        </div>
        <div ref="slidesContainer"
            class="flex flex-row lg:flex-col lg:gap-20 overflow-hidden snap-mandatory snap-x no-scrollbar lg:py-8">
            <div ref="slide" v-for="properti in properties" :key="properti.id" :class="[listItem(properti.id), posisi]"
                class="flex flex-col lg:items-center gap-10 md:gap-[60px] min-w-full snap-always snap-center">
                <div class="relative flex flex-col gap-7 lg:gap-10 lg:w-[185%]">
                    <img :src="`${properti.img}`" alt=""
                        class="object-cover rounded w-full h-[208px] md:h-[524px] lg:max-h-[452px]">
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
                <div class="flex flex-col gap-7 lg:gap-10 lg:w-[50%]">
                    <div class="flex flex-col gap-1">
                        <div
                            class="font-montserrat font-semibold md:font-bold text-2xl md:text-[36px] text-title text-center lg:text-left leading-[30px] md:leading-[44px]">
                            {{ properti.nama }}
                        </div>
                        <div
                            class="font-montserrat font-medium text-base md:text-[20px] text-icon text-center lg:text-left leading-[20px] md:leading-[20px]">
                            {{ properti.slogan }}
                        </div>
                    </div>
                    <div
                        class="font-montserrat font-normal text-xs md:text-lg text-bodyText text-center lg:text-left leading-6 md:leading-[30px]">
                        {{ properti.deskripsi }}
                    </div>
                    <div class="flex flex-col gap-1 md:gap-4 justify-center lg:justify-start">
                        <div
                            class="font-montserrat font-bold text-xs md:text-base text-placeholder text-center lg:text-left leading-[24px] lg:w-fit">
                            Fasilitas Umum
                        </div>
                        <div class="flex flex-row justify-center lg:justify-start gap-4 md:gap-8">
                            <HomePropertyFacility title="Masjid">
                                <img src="~/assets/img/mosque.png" alt="mosque">
                            </HomePropertyFacility>
                            <HomePropertyFacility title="Kolam Renang">
                                <img src="~/assets/img/pool.png" alt="pool">
                            </HomePropertyFacility>
                            <HomePropertyFacility title="Alarm Kebakaran">
                                <img src="~/assets/img/alarm.png" alt="alarm">
                            </HomePropertyFacility>
                        </div>
                        <div class="flex flex-row justify-center lg:justify-start gap-4 md:gap-8">
                            <HomePropertyFacility title="Keamanan">
                                <img src="~/assets/img/shield.png" alt="shield">
                            </HomePropertyFacility>
                            <HomePropertyFacility title="Taman Bermain">
                                <img src="~/assets/img/play.png" alt="play">
                            </HomePropertyFacility>
                            <HomePropertyFacility title="Gym">
                                <img src="~/assets/img/barbel.png" alt="barbel">
                            </HomePropertyFacility>
                        </div>
                    </div>
                    <div class="flex flex-row gap-2 justify-center lg:justify-start md:gap-4">
                        <ButtonPrimary title="Buat Janji" link="/booking" />
                        <ButtonSecondary title="Selengkapnya" link="/detail" />
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-row gap-4 justify-center items-center lg:hidden">
            <div class="w-5 h-5">
                <svg @click="keKiri" v-if="geser > 0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" class="w-5 h-5 stroke-[#AD9BB3] fill-[#AD9BB3]">
                    <path fill-rule="evenodd"
                        d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div v-for="properti in properties" :key="properti.id">
                <div v-if="geser + 1 === properti.id" class="w-2 h-2 rounded-full bg-[#AD9BB3]"></div>
                <div v-else class="w-2 h-2 rounded-full bg-[#EDE9EF] "></div>
            </div>
            <div class="w-5 h-5">
                <svg @click="keKanan" v-if="geser < 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" class="w-5 h-5 stroke-[#AD9BB3] fill-[#AD9BB3]">
                    <path fill-rule="evenodd"
                        d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                        clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    </div>
</template>