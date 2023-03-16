<template>
  <div class="flex w-full flex-col gap-10 lg:w-fit lg:flex-row lg:justify-between lg:gap-5">
    <div class=" relative flex flex-row gap-3 py-[68px] md:gap-6 md:px-[52px] w-full lg:w-fit lg:px-0 px-7">
      <div class="flex w-full flex-col gap-3 md:gap-6">
        <div class="relative w-full">
          <img
            class="h-[165px] w-full rounded-lg object-cover saturate-150 md:h-[280px]"
            src="https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
            alt="house-1"
          />
          <div class="absolute -top-[30px] -left-[10px] flex w-fit flex-row items-center rounded-lg bg-white p-2 shadow lg:left-1/4 lg:p-4" >
            <div>
              <img src="~/assets/img/logo/forward.svg" alt="" class="h-[18px] md:h-[40px]" />
            </div>
            <div class="font-montserrat text-[10px] font-bold text-title md:text-base" >
              Commitment
            </div>
          </div>
        </div>
        <div class="relative w-full">
          <img
            class="h-[99px] w-full rounded-lg object-cover contrast-125 saturate-150 md:h-[169px]"
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="house-1"
          />
          <div class="absolute -bottom-[10px] lg:-bottom-[30px] -left-7 lg:-left-[10px] flex w-fit flex-row items-center rounded-lg bg-white p-2 shadow lg:p-4">
            <div>
              <img src="~/assets/img/logo/document-check.svg" alt="" class="h-[18px] md:h-[40px]" />
            </div>
            <div class="font-montserrat text-[10px] font-bold text-title md:text-base" >
              Professional
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col gap-3 md:gap-6">
        <div class="relative w-full">
          <img
            class="h-[114px] w-full rounded-lg object-cover saturate-150 md:h-[194px]"
            src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="house-1"
          />
        </div>
        <div class="relative w-full">
          <img
            class="h-[150px] w-full rounded-lg object-cover saturate-150 md:h-[260px]"
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="house-1"
          />
          <div class="absolute bottom-1/2 lg:-bottom-[10px] -right-[50px] flex w-fit flex-row items-center rounded-lg bg-white p-2 shadow lg:p-4" >
            <div>
              <img src="~/assets/img/logo/light-bulb.svg" alt="" class="h-[18px] md:h-[40px]" />
            </div>
            <div class="font-montserrat text-[10px] font-bold text-title md:text-base">
              Inovation
            </div>
          </div>
        </div>
      </div>
      <div class="absolute top-1/2 left-[40%] -top-[30px] flex w-fit flex-row items-center rounded-lg bg-white p-2 shadow lg:p-4">
        <div>
          <img src="~/assets/img/logo/gift.svg" alt="" class="h-[18px] md:h-[40px]" />
				</div>
			</div>
		</div>
    <div class="flex flex-col items-center justify-center gap-4 md:gap-7 lg:items-start lg:gap-10 columns-6">
      <div class="text-center font-montserrat text-2xl font-bold text-title md:text-[44px] md:leading-[54px] lg:max-w-[568px] lg:text-left lg:leading-[73px]">
        Future Living
      </div>
      <div class="md:font-reguler text-center font-montserrat text-xs font-light leading-6 text-bodyText md:text-lg md:leading-[30px] lg:max-w-[568px] lg:text-left">
        Berpengalaman lebih dari 10 tahun sebagai pengembang yang menyediakan
        rumah menciptakan rumah yang fungsional, nyaman, dan bergaya dengan
        menggunakan bahan berkualitas tinggi dan teknologi canggih. Transparansi
        dan kejujuran adalah nilai-nilai Future Living.
      </div>
      <ButtonPrimary title="Hubungi Kami" class="md:px-8" />
    </div>
  </div>
</template>
