<template>
    <div class="flex flex-col lg:flex-row lg:gap-[68px]">
        <div class="flex flex-row py-[68px] lg:py-[40px] md:px-[52px] lg:px-0  gap-3 md:gap-6 lg:w-full">
            <div class="flex flex-col gap-3 md:gap-6 w-full">
                <div class="relative w-full">
                    <img class="object-cover w-full h-[165px] md:h-[280px] rounded-lg saturate-150"
                        src="https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                        alt="house-1">
                    <HomeAboutFeaturebar
                        class="animate-pop absolute -top-[30px] left-0 md:-top-[40px] md:-left-[52px] lg:-left-[10px]"
                        title="30K+" description="Customer Berbahagia" />
                </div>
                <div class="relative w-full">
                    <img class="object-cover w-full h-[99px] md:h-[169px] rounded-lg contrast-125 saturate-150"
                        src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="house-1">
                    <HomeAboutFeaturebar
                        class="animate-pop animation-delay-2000 absolute -bottom-[30px] left-0 md:bottom-auto md:-top-[40px] md:-left-[52px] lg:left-[20px] lg:-top-[50px]"
                        title="10T" description="Tahun melayani" />
                </div>
            </div>
            <div class="flex flex-col gap-3 md:gap-6 w-full">
                <div class="relative w-full">
                    <img class="object-cover w-full h-[114px] rounded-lg md:h-[194px] saturate-150"
                        src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="house-1">
                    <HomeAboutFeaturebar
                        class="animate-pop animation-delay-4000 absolute -top-[30px] right-0 md:top-auto md:-bottom-[40px] md:-right-[52px] z-[1]"
                        title="17+" description="Perusahaan Terafiliasi" />
                </div>
                <div class="relative w-full">
                    <img class="object-cover w-full h-[150px] rounded-lg md:h-[260px] saturate-150"
                        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="house-1">
                    <HomeAboutFeaturebar
                        class="animate-pop animation-delay-6000 absolute -bottom-[30px] right-0 md:-bottom-[40px] md:-right-[52px]"
                        title="44k" description="Properti dibangun" />
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-7 lg:gap-10 justify-center lg:max-w-[45%]">
            <div
                class="font-montserrat font-semibold md:font-bold text-2xl md:text-[44px] text-title text-center lg:text-left leading-[30px] md:leading-[54px]">
                Tentang Kami
            </div>
            <div
                class="font-montserrat font-normal text-xs md:text-lg text-bodyText text-center lg:text-left leading-6 md:leading-[30px]">
                Berpengalaman lebih dari 10 tahun sebagai pengembang yang menyediakan rumah menciptakan rumah yang
                fungsional, nyaman, dan bergaya dengan menggunakan bahan berkualitas tinggi dan teknologi canggih.
                Transparansi dan kejujuran adalah nilai-nilai Future Living.</div>
            <div class="flex flex-row gap-2 justify-center lg:justify-start md:gap-4">
                <ButtonPrimary title="Selengkapnya" link="/about" />
                <ButtonSecondary title="Hubungi Kami" link="/#kontak" />
            </div>
        </div>
    </div>
</template>