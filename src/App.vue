<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue';
</script>

<template>
  <div class="text-foreground">
    <Navigation></Navigation>
    <RouterView />
  </div>
</template>
