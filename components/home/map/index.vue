<template>
    <div class="flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-[64px]">
        <div class="h-[286px] md:h-[447px] lg:h-[500px] lg:w-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d126737.2428085276!2d107.611991!3d-6.9455832!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1679382383825!5m2!1sen!2sid"
                width="100%" height="100%" allowfullscreen loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="flex flex-col gap-[10px] md:gap-[28px] lg:gap-[64px] lg:w-[100%]">
            <div class="flex flex-col gap-2">
                <div
                    class="font-montserrat font-semibold md:font-bold text-2xl md:text-[44px] text-title lg:leading-[60px]">
                    Perumahan Bungalow II
                </div>
                <div class="font-montserrat font-medium text-[14px] md:text-[20px] text-title">
                    Bandung, Jawa Barat
                </div>
            </div>
            <div class="flex flex-col gap-2 md:gap-4">
                <div class="font-montserrat font-medium md:font-semibold text-[14px] md:text-[28px] text-title">
                    Key Location:
                </div>
                <div class="grid grid-cols-2 gap-2 md:gap-[14px]">
                    <HomeMapKey text="J&T: 2 km">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 md:w-[42px] md:h-[42px] stroke-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                    </HomeMapKey>
                    <HomeMapKey text="Universitas: 0,75 km">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 md:w-[42px] md:h-[42px] stroke-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                        </svg>
                    </HomeMapKey>
                    <HomeMapKey text="Stasiun KAI: 2,5 km">
                        <svg class="md:w-[42px] md:h-[42px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 48 48">
                            <rect x="0" y="0" width="48" height="48" fill="none" stroke="none" />
                            <g fill="none">
                                <path class="stroke-icon" stroke="currentColor" stroke-linejoin="round" stroke-width="3"
                                    d="M12 6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V6Z" />
                                <circle class="fill-icon" cx="18" cy="26" r="2" fill="currentColor" />
                                <circle class="fill-icon" cx="30" cy="26" r="2" fill="currentColor" />
                                <path class="stroke-icon" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="3" d="M12 20h24M21 38h6m-9 6h12" />
                                <path class="stroke-icon" stroke="currentColor" stroke-linecap="round" stroke-width="3"
                                    d="m17 32l-6 12m20-12l6 12" />
                                <path class="stroke-icon" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="3" d="M36 15v10M12 15v10" />
                            </g>
                        </svg>
                    </HomeMapKey>
                    <HomeMapKey text="Apartemen: 0,7 km">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 md:w-[42px] md:h-[42px] stroke-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                    </HomeMapKey>
                    <HomeMapKey text="Barber Bro: 0,8 km">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 md:w-[42px] md:h-[42px] stroke-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
                        </svg>
                    </HomeMapKey>
                    <HomeMapKey text="Perpustakaan: 0,65 km">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 md:w-[42px] md:h-[42px] stroke-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>

                    </HomeMapKey>
                    <HomeMapKey text="Ciwalk: 0,8 km">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 md:w-[42px] md:h-[42px] stroke-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </HomeMapKey>
                    <HomeMapKey text="Gaming House: 0,5 km">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 md:w-[42px] md:h-[42px] stroke-icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                        </svg>
                    </HomeMapKey>
                </div>
            </div>
        </div>
    </div>
</template>