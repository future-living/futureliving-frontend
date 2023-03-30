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
    (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
            clearTimeout(timeout)
        }
        function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
                slider.next()
            }, 3000)
        }
        slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
            })
            nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
    },
])

const dotHelper = computed(() => slider.value ? [...Array(slider.value.track.details.slides.length).keys()] : [])

const directions = [
    {
        id: 1,
        nama: "Lucy Golbert",
        jabatan: "Komisaris Utama",
        img: "/_nuxt/assets/img/direksi1.png",
    },
    {
        id: 2,
        nama: "Gamaliel Rozenfort",
        jabatan: "Direktur Utama",
        img: "/_nuxt/assets/img/direksi2.png",
    },
    {
        id: 3,
        nama: "Alexander",
        jabatan: "Komisaris",
        img: "/_nuxt/assets/img/direksi3.png",
    }
];



</script>

<template>
    <div class="navigation-wrapper flex flex-col gap-10 justify-center">
        <div
            class="font-montserrat font-semibold md:font-bold text-2xl md:text-[44px] text-title text-center leading-[30px] md:leading-[54px] mt-[70px]">
            Jajaran Direksi
        </div>
        <div ref="container" class="keen-slider lg:pb-[70px]">
            <AboutDirectionCard v-for="direction in directions" :key="direction.id" :nama="direction.nama"
                :jabatan="direction.jabatan" :img="direction.img"
                :class="`keen-slider__slide number-slide${direction.id}`" />
        </div>
        <div class="flex flex-row gap-4 justify-center items-center lg:hidden">
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
                    :class="{ dot2: true, active: current === idx }" :key="idx"></button>
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

.dot2 {
    border: none;
    width: 8px;
    height: 8px;
    background: #C8BCCC;
    border-radius: 50%;
    margin: 0 8px;
    padding: 0px;
    cursor: pointer;
}

.dot2:focus {
    outline: none;
}

.dot2.active {
    background: #AD9BB3;
}
</style>