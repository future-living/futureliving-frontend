<script setup>
const emit = defineEmits(['handleVideoTour'])

const showTour = () => {
    emit('handleVideoTour')
}
</script>
<template>
    <div class="">
        <iframe class="w-[100vw] h-[100vh]" src="https://www.youtube.com/embed/FesaX7lffMY" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        <div @click="showTour" class="absolute top-14 right-8 md:top-16 md:right-5 lg:top-20 lg:right-5">
            <div class="flex flex-row gap-2 items-center py-2 px-4  bg-white rounded-[4px] shadow-md">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 stroke-title md:stroke-[2px] lg:stroke-[3px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div class="font-montserrat font-medium text-[12px] text-title leading-[12px]">Close Video
                </div>
            </div>
        </div>
    </div>
</template>