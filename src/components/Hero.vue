<template>
  <section>
    <div class="px-10 sm:px-20 grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Conheça o Covidômetro</h1>
        <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl ">
          Fique atualizado com velocidade e transparência. O Covidômetro é uma ferramenta que mostra para você em
          tempo
          real o número de casos e óbitos relacionados a pandemia da COVID-19 ao redor do mundo.
        </p>
        <a href="#"
          class="w-32 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-foreground ">
          Obter dados
        </a>
        <a href="https://github.com/coodyme/covidy"
          class="w-32 inline-flex items-center justify-center px-5 py-3 my-2  sm:my-0 text-base font-medium text-center border border-foreground rounded-lg hover:bg-foreground hover:text-white">
          Contribua
        </a>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="@/assets/doctors.svg" alt="doctors">
      </div>
    </div>
  </section>
</template>