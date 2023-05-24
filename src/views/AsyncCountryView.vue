<script setup lang="ts" >
import axios from 'axios'
import { useRoute } from 'vue-router';
import { ref } from 'vue';

import type { MoreData } from '@/types';
import { formatNumber, percent } from '@/utils';

const route = useRoute()

const item = ref<MoreData>()
const error = ref<boolean>(false)

async function getData() {
  try {
    const res = await axios.get<MoreData>(
      `https://api.apify.com/v2/key-value-stores/${route.query.token}/records/LATEST?disableRedirect=true`
    )
    item.value = res.data
    console.log(res.data)
  } catch (err) {
    error.value = true
  }
}

getData()

</script>

<template>
  <div class="h-screen mx-10 md:mx-120 lg:mx-60 my-5 bg-white border-2 rounded-md border-secondary">
    <div class="flex flex-col p-5 text-center ">
      <a class="text-center font-bold text-xl hover:underline decoration-solid">{{ route.params?.id }}</a>
      <dl class="grid grid-cols-2 grid-rows-3 py-4 md:grid-cols-3 md:grid-rows-2">
        <div class="flex flex-col">
          <dd>Total de casos</dd>
          <dt class="text-primary mb-2 text-3xl font-bold">{{ formatNumber(Number(item?.infected)) }}</dt>
        </div>
        <div class="flex flex-col">
          <dd>Mortes</dd>
          <dt class="text-primary mb-2 text-3xl font-bold">{{ formatNumber(Number(item?.deceased)) }}</dt>
        </div>
        <div class="flex flex-col">
          <dd>Fatalidade</dd>
          <dt class="text-primary mb-2 text-3xl font-bold">
            {{ percent(Number(item?.deceased), Number(item?.infected)) }}
          </dt>
        </div>
        <div class="flex flex-col">
          <dd>Recuperado</dd>
          <dt class="text-primary mb-2 text-3xl font-bold">
            {{ formatNumber(Number(item?.recovered)) }}
          </dt>
        </div>
        <div class="flex flex-col">
          <dd>Testado</dd>
          <dt class="text-primary mb-2 text-3xl font-bold">
            {{ formatNumber(Number(item?.tested)) }}
          </dt>
        </div>
        <div class="flex flex-col">
          <dd>Estado crítico</dd>
          <dt class="text-primary mb-2 text-3xl font-bold">
            {{ formatNumber(Number(item?.critical)) }}
          </dt>
        </div>
      </dl>
      <p>Último update: {{ item?.lastUpdatedAtApify }}</p>
      <p>Origem: <a :href="item?.sourceUrl" target="_blank">{{ item?.sourceUrl }}</a></p>
    </div>
  </div>
</template>