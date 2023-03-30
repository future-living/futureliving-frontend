<script setup>

useHead({
    title: "Booking - Future Living",
    meta: [
        { name: 'description', content: 'Find The Place To Live Your Dreams Easily Here' },
        { name: 'keywords', content: 'future, living, home, house, buy, sell' },
        { name: 'og:image', content: 'https://future-living.netlify.app/future-living-logo.png' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://future-living.netlify.app/booking' },
        { name: 'og:title', content: 'Booking - Future Living' },
        { name: 'og:description', content: 'Find The Place To Live Your Dreams Easily Here' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://future-living.netlify.app/booking' },
        { name: 'twitter:title', content: 'Booking - Future Living' },
        { name: 'twitter:description', content: 'Find The Place To Live Your Dreams Easily Here' },
        { name: 'twitter:image', content: 'https://future-living.netlify.app/future-living-logo.png' },

    ],
})

</script>

<template>
    <Spacer class="h-[0px] md:h-[0px] lg:h-[40px]" />
    <div class="base-section-container bg-[#F6F6F7] pb-10 lg:pb-20 pt-10">
        <Booking class="bg-[#F6F6F7]" />
    </div>
    <Spacer />
</template>