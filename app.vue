<template>
  <div class="relative" id="top">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <NuxtLink to="#top" class="fixed bottom-5 right-5">
      <div class="bg-[#F3F1F4] p-[8px] md:p-[12px] bg-opacity-80">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-[16px] h-[16px] md:w-[24px] md:h-[24px] stroke-title stroke-[2px]">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
        </svg>
      </div>
    </NuxtLink>
  </div>
</template>