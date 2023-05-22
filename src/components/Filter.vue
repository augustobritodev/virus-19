<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue'
</script>

<template>
  <div id="search" class="mx-10 md:mx-120 lg:mx-60 bg-white border-2 rounded-md border-secondary p-10">
    <p class="text-center font-bold text-xl">Filtrar dados sobre um país</p>
    <div class="sm:flex items-center bg-white rounded overflow-hidden p-4 justify-between">
      <div class="invisible sm:visible relative inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <IconSearch />
      </div>
      <input class="text-base  flex-grow outline-none px-4 " type="text" placeholder="Digite o nome do país" />
    </div>
    <div class="mx-5 border-b-2  border-primary"></div>
  </div>
</template>