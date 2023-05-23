<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue';

import Hero from '@/components/Hero.vue'
import Filter from '@/components/Filter.vue'
import Country from '@/components/Country.vue'

import { type Data } from '@/types'

const items = ref<Data[]>([])
const error = ref<boolean>(false)

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

</script>

<template>
  <main class="min-h-screen bg-gradient-to-t from-secondary to-white ">
    <Hero />
    <Filter :items="items" />
    <p class="p-20 text-center text-primary text-2xl" v-if="error">
      Desculpe, ocorreu um erro ao carregar os dados.
    </p>
    <template v-else>
      <li v-for="item in items " :key="item.country">
        <Country :item="item" />
      </li>
    </template>
  </main>
</template>
