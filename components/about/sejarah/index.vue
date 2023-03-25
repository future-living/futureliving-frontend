<script>
export default {
  data() {
    return {
      items: [
        {
          year: 2013,
          title: "Permulaan",
          text: "Awal mula Future Living terbentuk dengan perencanaan pembangunan Perumahan SunShine",
        },
        {
          year: 2015,
          title: "Shine",
          text: "Dengan harapan membangun Perumahan SunShine, berujung juga pada pembangunan Perumahan MoonShine",
        },
        {
          year: 2019,
          title: "StarShine",
          text: "Demand yang tinggi membawa Future Living berinovasi lebih lagi dengan Perumahan StarShine",
        },
        {
          year: 2023,
          title: "Bungalow",
          text: "Hunian Bungalow dengan teknologi canggih dan harga yang ekonomis inovasi terkini dari FutureLiving",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="flex w-full flex-col py-6 md:py-10 lg:justify-between lg:px-[86px]">
    <div
      class="text-center font-montserrat text-2xl font-bold text-title md:text-[44px] md:leading-[54px] lg:leading-[73px]">
      Sejarah dan Pencapaian
    </div>
    
    <AboutSejarahTimelinemd :items=items class="mt-6 md:mt-10 lg:mt-20" />
  </div>
</template>
