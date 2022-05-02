<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
<main>
  <NavBar />
  <div class="container">
  <RouterView />
  </div>
</main>
</template>

<style>
@import './assets/collection.css';
</style>