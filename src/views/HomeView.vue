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
      return item.country
        .toLowerCase()
        .includes(filterInputValue.value.toLowerCase())
    })
  }
  return items.value
})

</script>

<template>
  <main class="min-h-screen bg-gradient-to-t from-secondary to-white ">
    <Hero />
    <Filter @change="(msg: string) => filterInputValue = msg" />
    <p class="p-20 text-center text-primary text-2xl" v-if="error">
      Desculpe, ocorreu um erro ao carregar os dados.
    </p>
    <template v-else>
      <li v-for="(item, i) in filtered " :key="i">
        <Country :item="item" />
      </li>
    </template>
  </main>
</template>
