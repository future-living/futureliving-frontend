<script setup>

useHead({
    title: "Future Living",
    meta: [
        { name: 'description', content: 'Find The Place To Live Your Dreams Easily Here' },
        { name: 'keywords', content: 'future, living, home, house, buy, sell' },
        { name: 'og:image', content: 'https://future-living.netlify.app/future-living-logo.png' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://future-living.netlify.app' },
        { name: 'og:title', content: 'Future Living' },
        { name: 'og:description', content: 'Find The Place To Live Your Dreams Easily Here' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://future-living.netlify.app' },
        { name: 'twitter:title', content: 'Future Living' },
        { name: 'twitter:description', content: 'Find The Place To Live Your Dreams Easily Here' },
        { name: 'twitter:image', content: 'https://future-living.netlify.app/future-living-logo.png' },

    ],
})

const tour = ref(false)
const videoTour = ref(false)
const messageSent = ref(false)

const toogleTour = () => {
    tour.value = !tour.value
}

const toogleVideoTour = () => {
    videoTour.value = !videoTour.value
}

const toogleMessageSent = () => {
    messageSent.value = !messageSent.value
}


</script>

<template>
    <div class="base-section-container pt-4 md:pt-8 lg:pt-16">
        <HomeHero />
    </div>
    <Spacer />
    <div class="base-section-container">
        <HomeAbout />
    </div>
    <Spacer />
    <div class="base-section-container">
        <HomeProperty class="scroll-m-10 md:scroll-m-28" id="property" @handle-tour3d="toogleTour"
            @handle-video-tour="toogleVideoTour" />
    </div>
    <Spacer />
    <div class="base-section-container">
        <HomeService />
    </div>
    <Spacer />
    <div class="project-section-container">
        <HomePortofolio />
    </div>
    <Spacer />
    <div class="testimony-section-container">
        <HomeTestimonial />
    </div>
    <Spacer />
    <div class="base-section-container pb-10">
        <HomeContact @handle-message-sent="toogleMessageSent" class="scroll-m-20 md:scroll-m-28" id="kontak" />
    </div>
    <Spacer />
    <div class="base-section-container">
        <HomeArticle class="scroll-m-20 md:scroll-m-28" id="artikel" />
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
