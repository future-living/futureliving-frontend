<template>
    <div class="base-section-container flex flex-row justify-between items-center py-4 lg:mt-6">
        <img class="h-8" src="~/assets/img/logo.webp" alt="">
        <div class="hidden md:flex md:flex-row md:justify-center md:items-center md:gap-6 lg:gap-10">
            <NavbarLink title="Beranda" link="#" />
            <NavbarLink title="Tentang Kami" link="#" />
            <NavbarLink title="Properti" link="#" />
            <NavbarLink title="Artikel" link="#" />
            <ButtonPrimary title="Hubungi Kami" link="#" />
        </div>
        <div class="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
    </div>
</template>