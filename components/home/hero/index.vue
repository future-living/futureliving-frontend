<template>
    <div class="flex flex-col lg:flex-row-reverse lg:justify-between gap-10 lg:gap-5">
        <div class="relative w-full lg:w-fit">
            <img class="object-cover rounded w-full md:h-[524px] lg:h-[640px] lg:w-[622px]"
                src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80"
                alt="">
            <div class="absolute hidden -bottom-16 -left-8 xl:flex xl:flex-col gap-6">
                <div class="flex flex-row gap-6">
                    <HomeHeroFeaturebar title="Terpercaya" description="Pengalaman lebih dari 10 tahun+">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-11 h-11">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </HomeHeroFeaturebar>
                    <HomeHeroFeaturebar title="Terjangkau" description="Menyediakan harga terbaik">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-11 h-11">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </HomeHeroFeaturebar>
                </div>
                <div class="flex flex-row gap-6 ml-16">
                    <HomeHeroFeaturebar title="Professional" description="Berpengalaman dan Professional">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-11 h-11">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                        </svg>
                    </HomeHeroFeaturebar>
                    <HomeHeroFeaturebar title="Cepat" description="Bekerja secara efisien">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-11 h-11">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                    </HomeHeroFeaturebar>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center lg:items-start gap-4 md:gap-7 lg:gap-10">
            <div
                class="font-montserrat font-bold text-xl md:text-[44px] lg:text-[60px] text-title text-center lg:text-left md:leading-[54px] lg:leading-[73px] lg:max-w-[568px]">
                Find The Place To Live Your Dreams Easily Here
            </div>
            <div
                class="font-montserrat font-light md:font-reguler text-xs md:text-lg text-bodyText text-center lg:text-left leading-6 md:leading-[30px] lg:max-w-[568px]">
                Semua yang Anda butuhkan tentang hunian impian ada di sini. Future Living menyediakan hunian terbaik untuk
                Anda dan keluarga. Pengalaman kami membawa Anda pada kepuasan. </div>
            <div class="w-full flex flex-row gap-2 lg:max-w-[568px]">
                <div
                    class="appearance-none w-full flex flex-row  justify-center items-center  p-2 bg-white rounded-lg gap-2 ring-1 ring-placeholder">
                    <select
                        class="w-full focus:outline-none font-montserrat font-light md:font-normal text-xs md:text-base text-title leading-5"
                        type="text">
                        <option value="">Cari tipe rumah</option>
                        <option value="tipe A">tipe A</option>
                        <option value="tipe B">tipe B</option>
                        <option value="tipe C">tipe C</option>
                        <option value="tipe D">tipe D</option>
                    </select>
                </div>
                <ButtonPrimary title="Temukan" class="md:px-8" />
            </div>
            <div
                class="lg:w-full font-montserrat font-light md:font-reguler text-xs md:text-base text-bodyText text-center lg:text-left leading-6 md:leading-7 -mb-2 lg:-mb-8">
                Partner terpercaya kami</div>
            <div class="flex flex-row gap-5 justify-center items-center lg:justify-start lg:w-full">
                <img class="h-fit max-w-[48px] md:max-w-[100px]" src="~/assets/img/company2.webp" alt="">
                <img class="h-fit max-w-[48px] md:max-w-[100px]" src="~/assets/img/company1.webp" alt="">
                <img class="h-fit max-w-[48px] md:max-w-[100px]" src="~/assets/img/company3.webp" alt="">
                <img class="h-fit max-w-[48px] md:max-w-[100px]" src="~/assets/img/company5.webp" alt="">
                <img class="h-fit max-w-[48px] md:max-w-[100px]" src="~/assets/img/company4.webp" alt="">
            </div>
        </div>
    </div>
</template>