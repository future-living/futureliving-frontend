<script setup>

import { useKeenSlider } from 'keen-slider/vue' // import from 'keen-slider/vue.es' to get an ES module

const current = ref(1)

const [container, slider] = useKeenSlider({
    initial: current.value,
    slideChanged: (s) => {
        current.value = s.track.details.rel
    },
    breakpoints: {
        '(min-width: 768px)': {
            slides: {
                origin: "center",
                perView: 2,
                spacing: 64,
            }
        },
        '(min-width: 1024px)': {
            slides: {
                origin: "center",
                perView: 3,
                spacing: 64,
            },
        },
    },

}, [
    // add plugins here
])

const dotHelper = computed(() => slider.value ? [...Array(slider.value.track.details.slides.length).keys()] : [])

const properties = [
    {
        id: 1,
        nama: "Perumahan MoonShine",
        kota: "Surabaya",
        img: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
    },
    {
        id: 2,
        nama: "Perumahan MoonShine",
        kota: "Surabaya",
        img: "https://images.unsplash.com/photo-1561975023-4cf2c838810c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
        id: 3,
        nama: "Perumahan StarShine",
        kota: "Yogyakarta",
        img: "https://images.unsplash.com/photo-1557696859-ebd88b12be5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    }
];



</script>

<template>
    <div class="navigation-wrapper flex flex-col gap-6 md:gap-10 justify-center">
        <div
            class="font-montserrat font-semibold md:font-bold text-2xl md:text-[44px] text-title text-center leading-[30px] md:leading-[54px]">
            Proyek
        </div>
        <div ref="container" class="keen-slider">
            <HomePortofolioCard v-for="properti in properties" :key="properti.id" :nama="properti.nama"
                :kota="properti.kota" :image="properti.img" :class="`keen-slider__slide number-slide${properti.id}`" />
        </div>
        <div class="flex flex-row gap-4 justify-center items-center">
            <div class="w-5 h-5">
                <svg v-if="current !== 0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="w-5 h-5 stroke-[#AD9BB3]" @click="slider.prev()">
                    <path fill-rule="evenodd"
                        d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <!-- <div v-for="properti in properties" :key="properti.id">
                                                                                <div v-if="geser + 1 === properti.id" class="w-2 h-2 rounded-full bg-[#AD9BB3]"></div>
                                                                                <div v-else class="w-2 h-2 rounded-full bg-[#EDE9EF]"></div>
                                                                            </div> -->

            <div v-if="slider" class="dots">
                <button v-for="(_slide, idx) in dotHelper" @click="slider.moveToIdx(idx)"
                    :class="{ dot: true, active: current === idx }" :key="idx"></button>
            </div>
            <div class="w-5 h-5">
                <svg v-if="current < dotHelper.length - 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" class="w-5 h-5 stroke-[#AD9BB3]" @click="slider.next()">
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