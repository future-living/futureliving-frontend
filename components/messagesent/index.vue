<script setup>
const emit = defineEmits(['handleMessageSent'])

const closeDialog = () => {
    emit('handleMessageSent')
}
</script>
<template>
    <div class="flex justify-center items-center h-screen w-screen bg-white bg-opacity-50">
        <div class="flex flex-row items-center relative gap-[6px] px-[14px] py-[29px] bg-[#C8BCCC]">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="min-w-[260px] lg:min-w-[466px] font-montserrat font-semibold text-base text-[#201026]">Pesan anda
                telah dikirim
            </div>
            <div @click="closeDialog" class="absolute top-[11px] right-[14px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
    </div>
</template>