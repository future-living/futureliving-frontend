<script setup>

useHead({
    title: "About - Future Living",
    meta: [
        { name: 'description', content: 'Find The Place To Live Your Dreams Easily Here' },
        { name: 'keywords', content: 'future, living, home, house, buy, sell' },
        { name: 'og:image', content: 'https://future-living.netlify.app/future-living-logo.png' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://future-living.netlify.app/about' },
        { name: 'og:title', content: 'About - Future Living' },
        { name: 'og:description', content: 'Find The Place To Live Your Dreams Easily Here' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://future-living.netlify.app/about' },
        { name: 'twitter:title', content: 'About - Future Living' },
        { name: 'twitter:description', content: 'Find The Place To Live Your Dreams Easily Here' },
        { name: 'twitter:image', content: 'https://future-living.netlify.app/future-living-logo.png' },
    ],
})

</script>
<template>
  <Spacer />
  <div class="base-section-container">
    <AboutAbout />
  </div>
  <Spacer />
  <div class="base-section-container bg-[#EDE9EF]">
    <AboutMotovision class="" />
  </div>
  <Spacer />
  <div class="base-section-container">
    <AboutSejarah />
  </div>
  <Spacer />
  <div class="project-section-container bg-[#EDE9EF]">
    <AboutDirection />
  </div>
  <Spacer />
</template>
