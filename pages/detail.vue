<script setup>

useHead({
    title: "Detail - Future Living",
    meta: [
        { name: 'description', content: 'Find The Place To Live Your Dreams Easily Here' },
        { name: 'keywords', content: 'future, living, home, house, buy, sell' },
        { name: 'og:image', content: 'https://future-living.netlify.app/future-living-logo.png' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://future-living.netlify.app/detail' },
        { name: 'og:title', content: 'Detail - Future Living' },
        { name: 'og:description', content: 'Find The Place To Live Your Dreams Easily Here' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://future-living.netlify.app/detail' },
        { name: 'twitter:title', content: 'Detail - Future Living' },
        { name: 'twitter:description', content: 'Find The Place To Live Your Dreams Easily Here' },
        { name: 'twitter:image', content: 'https://future-living.netlify.app/future-living-logo.png' },

    ],
})

const tour = ref(false)
const videoTour = ref(false)

const toogleTour = () => {
    tour.value = !tour.value
}

const toogleVideoTour = () => {
    videoTour.value = !videoTour.value
}

</script>
<template>
    <Spacer />
    <div class="base-section-container">
        <DetailHero @handle-tour3d="toogleTour"
            @handle-video-tour="toogleVideoTour"/>
    </div>
    <Spacer />
    <div class="base-section-container bg-[#EDE9EF]">
        <DetailProperty />
    </div>
    <Spacer />
    <div class="base-section-container">
        <DetailResidence />
    </div>
    <Spacer />
    <div class="project-section-container bg-[#EDE9EF]">
        <DetailPortofolio />
    </div>
    <Spacer />
    <div class="base-section-container">
        <HomeMap />
    </div>
    <Spacer />
    <Tour3dasset @handle-tour3d="toogleTour" class="fixed top-0 z-50" v-if="tour == true" />
    <Videotour @handle-video-tour="toogleVideoTour" class="fixed top-0 z-50" v-if="videoTour == true" />
    <Messagesent @handle-message-sent="toogleMessageSent" class="fixed top-0 z-50" v-if="messageSent == true" />
</template>