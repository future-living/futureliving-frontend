<script>
export default {
  data() {
    return {
      items: [
        {
          logo: "/light-bulb.svg",
          title: "Inovasi",
          text: "Menjadi pengembang properti terkemuka di Asia Tenggara, dipercaya oleh pelanggan, karyawan, masyarakat, dan pemangku kepentingan lainnya.",
        },
        {
          logo: "/forward.svg",
          title: "Komitmen",
          text: "Mengedepankan kepuasan client adalah komitmen yang akan terus dipegang oleh Future Living.",
        },
        {
          logo: "/gift.svg",
          title: "Loyal",
          text: "Rasa loyal antar sesama kolega dipercaya dapat memberikan dampak kepada kepercayaan client.",
        },
        {
          logo: "/document-check.svg",
          title: "Profesional",
          text: "Melakukan pekerjaan dengan sepenuh hati untuk mencapai hasil terbaik, bertanggung jawab penuh kepada client.",
        },
      ],
    };
  },
};
</script>
<template>
  <div
    class="flex w-full flex-col py-10 md:py-[110px] lg:w-fit lg:justify-between lg:px-[86px]"
  >
    <div
      class="text-center font-montserrat text-2xl font-bold text-title md:text-[44px] md:leading-[54px] lg:leading-[73px]"
    >
      Visi Kami
    </div>
    <div
      class="md:font-reguler text-center font-montserrat text-xs font-light leading-6 text-bodyText md:text-lg md:leading-[30px]"
    >
      Menjadi pengembang properti terkemuka di Asia Tenggara, dipercaya oleh
      pelanggan, karyawan, masyarakat, dan pemangku kepentingan lainnya.
    </div>
    <div class="mt-10 grid gap-7 lg:grid-cols-2 lg:gap-10">
      <div
        class="basis-1/2 rounded-lg bg-white p-6 shadow"
        v-for="(item, index) in items"
      >
        <div class="flex w-fit flex-row rounded-lg p-4 shadow items-center">
          <div >
            <img :src="item.logo" alt="" />
          </div>
          <div
            class="font-montserrat font-bold text-base text-title ml-[6px]"
          >
            {{ item.title }}
          </div>
        </div>
        <div
          class="md:font-reguler font-montserrat text-sm font-light leading-6 text-bodyText mt-4"
        >
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>
