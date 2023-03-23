<script setup>
import { useKeenSlider } from 'keen-slider/vue' // import from 'keen-slider/vue.es' to get an ES module

const current = ref(1)

const [container, slider] = useKeenSlider({
    loop: true,
    initial: current.value,
    slideChanged: (s) => {
        current.value = s.track.details.rel
    },
    breakpoints: {
        '(min-width: 1028px)': {
            slides: {
                origin: "center",
                perView: 2,
                spacing: 40,
            }
        },
    },
}, [
    // add plugins here
])

const dotHelper = computed(() => slider.value ? [...Array(slider.value.track.details.slides.length).keys()] : [])

const testimonial = [
    {
        id: 1,
        nama: "Miguel San Jose",
        jabatan: "Direktur PT",
        company: "Home Properties",
        caption: "“Langkah Awal Demi Mimpi Jadi Kenyataan”",
        testimoni:
            "Demi mencapai mimpi yang dituju, perlu langkah awal yang pasti. Future Living memiliki segalanya sebagai langkah awal mewujudkan mimpi.",
        imgProperti: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        imgCompany: "/company1.png",
        imgProfile: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
        id: 2,
        nama: "Abi Rozenfort",
        jabatan: "Direktur PT",
        company: "Home & Garden",
        caption: "“Laba Perusahaan Kami Meroket 200%”",
        testimoni:
            "Ini adalah pelayanan kami, kami melayani dengan sepenuh hati. Anda akan mendapatkan pelayanan terbaik dari kami.",
        imgProperti: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80",
        imgCompany: "/company2.png",
        imgProfile: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
        id: 3,
        nama: "Russel Novel",
        jabatan: "Direktur PT",
        company: "Aki-Home",
        caption: "“Future Living Gambaran Masa Depan”",
        testimoni:
            "Masa depan bukan hanya sekedar angan-angan, Future Living menyediakan properti dengan teknologi terkini dan selalu ada gebrakan di dalamnya.",
        imgProperti: "/aki-home-testimonial.png",
        imgCompany: "/company3.png",
        imgProfile: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
];
</script>
<template>
    <div class="navigation-wrapper flex flex-col py-16 lg:py-0 gap-6 md:gap-10">
        <div
            class="font-montserrat font-semibold md:font-bold text-2xl md:text-[44px] text-title text-center leading-[30px] md:leading-[54px]">
            Testimoni
        </div>
        <div ref="container" class="keen-slider">
            <div v-for="testimoni in testimonial" :key="testimoni.id"
                class="relative flex flex-col gap-16 pt-8 pb-52 md:pt-0 md:pb-8"
                :class="`keen-slider__slide number-slide${testimoni.id}`">
                <div>
                    <img :src="testimoni.imgProperti" alt=""
                        class="object-cover rounded w-full h-[208px] md:h-[489px] lg:max-h-[452px] lg:min-w-[652px] md:px-10">
                </div>

                <div class="absolute top-3 md:left-3 w-full">
                    <HomeTestimonialLogocard class="mx-auto md:mx-0 w-fit" :img-properti="testimoni.imgCompany" />
                </div>
                <div class="absolute top-52 md:top-[84px] md:left-3 w-full">
                    <HomeTestimonialProfilecard class="mx-auto md:mx-0 w-fit" :nama="testimoni.nama"
                        :jabatan="testimoni.jabatan" :company="testimoni.company" :img-profile="testimoni.imgProfile" />
                </div>
                <div class="absolute top-72 md:top-[380px] w-full px-2 right-3 lg:right-0">
                    <HomeTestimonialQuotecard class="md:ml-auto " :caption="testimoni.caption"
                        :testimoni="testimoni.testimoni" />
                </div>
            </div>
        </div>
        <div class="flex flex-row gap-4 justify-center items-center">
            <div class="w-5 h-5">
                <svg v-if="current !== 0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="w-5 h-5 stroke-[#AD9BB3] fill-[#AD9BB3]" @click="slider.prev()">
                    <path fill-rule="evenodd"
                        d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div v-if="slider" class="dots">
                <button v-for="(_slide, idx) in dotHelper" @click="slider.moveToIdx(idx)"
                    :class="{ dot: true, active: current === idx }" :key="idx"></button>
            </div>
            <div class="w-5 h-5">
                <svg v-if="current < dotHelper.length - 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" class="w-5 h-5 stroke-[#AD9BB3] fill-[#AD9BB3]" @click="slider.next()">
                    <path fill-rule="evenodd"
                        d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                        clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style>
@import url('keen-slider/keen-slider.css');

.navigation-wrapper {
    position: relative;
}

.dots {
    display: flex;
    padding: 10px 0;
    justify-content: center;
}

.dot {
    border: none;
    width: 8px;
    height: 8px;
    background: #EDE9EF;
    border-radius: 50%;
    margin: 0 8px;
    padding: 0px;
    cursor: pointer;
}

.dot:focus {
    outline: none;
}

.dot.active {
    background: #AD9BB3;
}
</style>