<script setup>
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import HeroPage from './pages/HeroPage.vue';
</script>

<template>
  <TheHeader />
  <HeroPage />
  <RouterView />
</template>

<style scoped></style>
