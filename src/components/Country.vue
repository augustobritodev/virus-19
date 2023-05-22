<template>
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
</template>