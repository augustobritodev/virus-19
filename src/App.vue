<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue';
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="text-foreground bg-secondary">
    <Navigation></Navigation>
    <RouterView />
    <Footer />
  </div>
</template>
