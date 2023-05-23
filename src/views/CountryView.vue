<script setup lang="ts" >
import AsyncCountryView from '@/views/AsyncCountryView.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <AsyncCountryView />
    </template>
  </Suspense>
</template>