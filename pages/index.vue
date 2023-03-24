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
        <HomeProperty />
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
        <HomeContact />
    </div>
    <Spacer />
    <div class="base-section-container">
        <HomeArticle />
    </div>
    <Spacer />
    <div class="base-section-container">
        <HomeMap />
    </div>
    <Spacer />
</template>