<script setup>
const emit = defineEmits(['handleTour3d'])

const showTour = () => {
    emit('handleTour3d')
}
</script>
<template>
    <div class="">
        <iframe class="w-[100vw] h-[100vh]" src="https://friendly-sable-16ed07.netlify.app/"></iframe>
        <div @click="showTour" class="absolute top-3 right-6 md:top-4 md:right-8 lg:top-5 lg:right-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 stroke-white md:stroke-[2px] lg:stroke-[3px]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    </div>
</template>