<template>
    <div class="base-section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center py-10 gap-8 bg-title">
        <div class="flex flex-col gap-2 lg:order-1">
            <img class="h-8 w-fit" src="~/assets/img/logo-white.webp" alt="logo-white">
            <div class="font-montserrat font-light  text-sm text-link leading-6">
                Kami menyediakan informasi mengenai properti untuk membantu Anda menemukan hunian impian
            </div>
            <div class="flex flex-row gap-6">
                <img src="~/assets/img/fb.webp" alt="fb">
                <img src="~/assets/img/twt.webp" alt="twt">
                <img src="~/assets/img/ig.webp" alt="ig">
            </div>
        </div>
        <div class="flex flex-col gap-2 lg:order-4">
            <div class="font-montserrat font-medium text-base text-white ">
                Newsletter </div>
            <div class="flex flex-row  justify-center items-center  p-2 bg-white rounded-lg gap-2">
                <div class="pl-2">
                    <svg class="stroke-icon w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </div>
                <form class="flex flex-row w-full items-center gap-2" action="">
                    <input required
                        class="w-full focus:outline-none font-montserrat font-light text-xs text-title placeholder:text-placeholder leading-5"
                        type="text" placeholder="Masukkan Email">
                    <ButtonSend title="Send" />
                </form>
            </div>
        </div>
        <div class="grid grid-cols-2 md:h-fit lg:grid-cols-1 gap-6 lg:gap-4 lg:order-2 lg:w-fit lg:mx-auto">
            <FooterLink title="Beranda" link="/" />
            <FooterLink title="Tentang Kami" link="/about" />
            <FooterLink title="Properti" link="#property" />
            <FooterLink title="Artikel" link="#artikel" />
        </div>
        <div class="grid grid-cols-1 gap-6 lg:order-3">
            <div class="flex flex-col gap-2">
                <div class="font-montserrat font-medium text-base text-white ">
                    Alamat </div>
                <div class="font-montserrat font-light  text-sm text-link leading-6">
                    Future Living Head Office<br /> Jl. Saboga No. 12 Bandung, Jawa Barat
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <div class="font-montserrat font-medium text-base text-white ">
                    Kontak </div>
                <div class="font-montserrat font-light  text-sm text-link leading-6">
                    +62 827-0986-4567
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-4 md:col-span-2 lg:col-span-4 lg:order-last">
            <div class="w-full h-[0.5px] bg-white"></div>
            <div class="flex flex-col md:flex-row md:justify-between lg:justify-center gap-2">
                <div class="font-montserrat font-light  text-sm text-link text-center leading-6">
                    Syarat dan Ketentuan - Kebijakan Privasi
                </div>
                <div class="font-montserrat font-light  text-sm text-link text-center leading-6">
                    @2023 Future Living. All Right Reserved
                </div>
            </div>
        </div>

    </div>
</template>