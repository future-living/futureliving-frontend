<script setup>
const drawer = ref(false);

const handleDrawer = () => {
    drawer.value = !drawer.value
}

</script>

<template>
    <div v-if="drawer == false"
        class="sticky top-0 left-0 base-section-container flex flex-row justify-between items-center py-4 lg:mt-6 w-full bg-white bg-opacity-[0.85] z-50">
        <NuxtLink to="/">
            <img class="h-8" src="~/assets/img/logo.webp" alt="">
        </NuxtLink>
        <div @click="handleDrawer" class="hidden md:flex md:flex-row md:justify-center md:items-center md:gap-6 lg:gap-10">
            <NavbarLink title="Beranda" link="/" />
            <NavbarLink title="Tentang Kami" link="/about" />
            <NavbarLink title="Properti" link="/#property" />
            <NavbarLink title="Artikel" link="/#artikel" />
            <ButtonPrimary title="Hubungi Kami" link="/#kontak" />
        </div>
        <div class="md:hidden" @click="handleDrawer">
            <svg v-if="drawer == false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
    </div>
    <div v-if="drawer == true"
        class="sticky top-0 left-0 base-section-container z-50 w-full py-4 lg:mt-6 bg-white h-full bg-opacity-[0.85]">
        <div class="flex flex-col">
            <div class="flex flex-row justify-between items-center">
                <NuxtLink to="/">
                    <img class="h-8" src="~/assets/img/logo.webp" alt="">
                </NuxtLink>
                <div @click="handleDrawer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div @click="handleDrawer" class="flex flex-col py-4 gap-4 md:py-6 md:gap-6">
                <NavbarLink title="Beranda" link="/" />
                <NavbarLink title="Tentang Kami" link="/about" />
                <NavbarLink title="Properti" link="/#property" />
                <NavbarLink title="Artikel" link="/#artikel" />
                <ButtonPrimary title="Hubungi Kami" link="/#kontak" />
            </div>

        </div>
    </div>
</template>