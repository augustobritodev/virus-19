<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted, computed } from 'vue';

import Hero from '@/components/Hero.vue'
import Filter from '@/components/Filter.vue'
import Country from '@/components/Country.vue'

import { type Data } from '@/types'

const items = ref<Data[]>([])
const error = ref<boolean>(false)

const filterInputValue = ref<string>('')

onMounted(() => {
  async function getData() {
    try {
      const res = await axios.get<Data[]>('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
      items.value = res.data
    } catch (err) {
      error.value = true
    }
  }

  getData()
})

const filtered = computed(() => {
  if (filterInputValue.value != '' && filterInputValue.value) {
    return items.value.filter((item: Data) => {
      console.log(filterInputValue.value)
      return item.country
        ?.toLowerCase()
        .includes(filterInputValue.value?.toLowerCase())
    })
  }
  return items.value
})

const orderByTotalCases = () => {
  items.value.sort((a: Data, b: Data) => {
    return Number(b.infected) - Number(a.infected)
  })
}

</script>

<template>
  <main class="min-h-screen bg-gradient-to-t from-secondary to-white ">
    <Hero />
    <Filter @change="(msg: string) => filterInputValue = msg" />
    <div class="flex justify-end mx-10 md:mx-120 lg:mx-60 my-5">
      <button class="text-sm" @click="orderByTotalCases">Ordenar por total de casos</button>
    </div>
    <p v-if="error" class="p-20 text-center text-primary text-2xl">
      Desculpe, ocorreu um erro ao carregar os dados.
    </p>
    <p v-if="!filtered.length && items.length" class="p-20 text-center text-primary text-2xl">
      Sem resultados para busca...
    </p>
    <template v-else>
      <li v-for="(item, i) in filtered " :key="i">
        <Country :item="item" />
      </li>
    </template>
  </main>
</template>
