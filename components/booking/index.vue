<script setup>
const sent = ref(false)


const thanks = () => {
    sent.value = !sent.value
}
</script>

<template>
    <div>
        <div class="navigation-wrapper flex flex-col gap-[56px] justify-center">
            <div class="flex flex-col gap-1">
                <div
                    class="font-montserrat font-semibold md:font-bold text-2xl md:text-[44px] text-title text-center leading-[30px] md:leading-[54px]">
                    Dapatkan Informasi Lebih
                </div>
                <div
                    class="font-montserrat font-medium text-base md:text-[20px] text-icon text-center leading-[20px] md:leading-[20px]">
                    Lebih dekat dengan kami dan temukan solusinya </div>
            </div>
            <div class="flex flex-col items-center xl:flex-row gap-[70px] md:gap-[112px] xl:mx-auto">
                <div class="relative w-fit mx-auto">
                    <img class="object-cover rounded h-[268px] md:h-[613px]" src="/contact.png" alt="">
                    <img class="absolute -top-[10px] md:-top-[25px] -right-[62px] md:-right-[141px] object-cover rounded h-[290px] md:h-[665px]"
                        src="/hand.png" alt="">
                    <HomeContactCard
                        class="absolute w-[118px] md:w-[268px] top-[39px] left-[134px]  md:top-[91px] md:left-[306px]"
                        title="WhatsApp" content="+62 827-0986-4567"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="w-[20px] h-[20px] md:w-[60px] md:h-[60px]  stroke-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg></HomeContactCard>
                    <HomeContactCard
                        class="absolute w-fit md:w-[268px] top-[133px] -left-[42px]  md:top-[307px] md:-left-[136px]"
                        title="Instagram" content="@FutureLiving"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="w-[20px] h-[20px] md:w-[60px] md:h-[60px]  stroke-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                    </HomeContactCard>
                    <HomeContactCard class=" absolute top-[254px] left-[31px] md:top-[590px] md:left-[82px] w-fit mx-auto"
                        title="Email" content="FutureLiving@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-[20px] h-[20px] md:w-[60px] md:h-[60px]  stroke-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                        </svg>

                    </HomeContactCard>
                </div>
                <div v-if="sent == false"
                    class="flex flex-col gap-5 md:gap-7 bg-white py-[20px] px-[30px] rounded-[8px] shadow-md ml-0 xl:ml-[100px]">
                    <div class="flex flex-col gap-1">
                        <div
                            class="font-montserrat font-semibold md:font-bold text-2xl md:text-[44px] lg:text-[36px] text-title text-center leading-[30px] md:leading-[54px]">
                            Buat Janji sekarang!
                        </div>
                        <div
                            class="font-montserrat font-medium text-base md:text-[20px] text-icon text-center lg:text-left leading-[20px] md:leading-[20px]">
                            Kami akan membantu Anda
                        </div>
                    </div>
                    <form class="flex flex-col gap-4" @submit="thanks">
                        <div class="flex flex-col gap-1 md:gap-2">
                            <div
                                class="font-montserrat font-regular text-[12px] md:text-[18px] text-bodyText  leading-[24px] md:leading-[30px] align-middle">
                                Nama
                            </div>
                            <input required
                                class="font-montserrat font-regular text-[10px] md:text-[16px] text-bodyText leading-[24px] md:leading-[26px] align-middle placeholder:text-bodyText focus:outline-none px-4 py-2 md:py-4 border-2 border-inputForm rounded md:rounded-lg"
                                type="text" placeholder="Masukan nama Anda disini">
                        </div>
                        <div class="flex flex-col gap-1 md:gap-2">
                            <div
                                class="font-montserrat font-regular text-[12px] md:text-[18px] text-bodyText  leading-[24px] md:leading-[30px] align-middle">
                                Email
                            </div>
                            <input required
                                class="font-montserrat font-regular text-[10px] md:text-[16px] text-bodyText leading-[24px] md:leading-[26px] align-middle placeholder:text-bodyText focus:outline-none px-4 py-2 md:py-4 border-2 border-inputForm rounded md:rounded-lg"
                                type="email" placeholder="Masukan No Telepon Anda disini">
                        </div>
                        <div class="flex flex-col gap-1 md:gap-2">
                            <div
                                class="font-montserrat font-regular text-[12px] md:text-[18px] text-bodyText  leading-[24px] md:leading-[30px] align-middle">
                                Tanggal
                            </div>
                            <input required
                                class="font-montserrat font-regular text-[10px] md:text-[16px] text-bodyText leading-[24px] md:leading-[26px] align-middle placeholder:text-bodyText focus:outline-none px-4 py-2 md:py-4 border-2 border-inputForm rounded md:rounded-lg"
                                type="date" placeholder="Masukan No Telepon Anda disini">
                        </div>
                        <div class="flex flex-col gap-1 md:gap-2">
                            <div
                                class="font-montserrat font-regular text-[12px] md:text-[18px] text-bodyText  leading-[24px] md:leading-[30px] align-middle">
                                Waktu
                            </div>
                            <input required
                                class="font-montserrat font-regular text-[10px] md:text-[16px] text-bodyText leading-[24px] md:leading-[26px] align-middle placeholder:text-bodyText focus:outline-none px-4 py-2 md:py-4 border-2 border-inputForm rounded md:rounded-lg"
                                type="time" placeholder="Masukan No Telepon Anda disini">
                        </div>
                        <ButtonSubmit type class="w-full text-center mt-[12px] md:mt-[24px]" title="Buat Janji" />
                    </form>

                </div>
                <div v-if="sent == true" class="flex flex-col gap-[12px] md:gap-[20px] max-w-[548px]">
                    <div
                        class="font-montserrat font-semibold md:font-bold text-2xl md:text-[44px] lg:text-[36px] text-title text-center leading-[30px] md:leading-[43px]">
                        Terima kasih telah menghubungi kami
                    </div>
                    <div class="font-montserrat font-medium text-base md:text-[18px] text-icon text-center">
                        Cek notifikasi e-mail<br>Link verifikasi buat janji telah dikirimkan ke e-mail anda
                    </div>
                    <ButtonPrimary type class="w-full text-center mt-[12px] md:mt-[24px]" title="Kembali ke Beranda"
                        link="#" />
                </div>
            </div>
        </div>
    </div>
</template>