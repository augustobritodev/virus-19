<script setup lang="ts">
</script>

<template>
  <main class="bg-gradient-to-b from-secondary to-white ">
    <section>
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Conheça o Covidômetro</h1>
          <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl ">
            Fique atualizado com velocidade e transparência. O Covidômetro é uma ferramenta que mostra para você em
            tempo
            real o número de casos e óbitos relacionados a pandemia da COVID-19 ao redor do mundo.
          </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="@/assets/doctors.svg" alt="doctors">
        </div>
      </div>
    </section>

    <div class="container mx-auto bg-gray-200 rounded-lg p-14">
      <form>
        <p class="text-center font-bold text-2xl">Filtrar dados sobre um país</p>
        <div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
          <button class="bg-primary text-base rounded-lg px-4 py-2 font-thin">Icon</button>
          <input class="text-base flex-grow outline-none px-2 " type="text" placeholder="Digite o nome do país" />
        </div>
      </form>
    </div>

    <!-- Card  -->

    <div class="m-20  bg-white border border-gray rounded-lg shadow dark:bg-gray dark:border-gray ">
      <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray" id="statistics" role="tabpanel"
        aria-labelledby="statistics-tab">
        <p class="text-center font-bold text-2xl">country_name</p>
        <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto sm:grid-cols-3 xl:grid-cols-6  sm:p-8">
          <div class="flex flex-col">
            <dd class=" ">Total de casos</dd>
            <dt class="mb-2 text-3xl font-extrabold">total_cases</dt>
          </div>
          <div class="flex flex-col">
            <dd class=" ">Mortes</dd>
            <dt class="mb-2 text-3xl font-extrabold">tota_deaths</dt>
          </div>
          <div class="flex flex-col">
            <dd class=" ">Fatalidade</dd>
            <dt class="mb-2 text-3xl font-extrabold">mortality_rate</dt>
          </div>
        </dl>
      </div>
    </div>

  </main>
</template>
