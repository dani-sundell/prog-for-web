<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <div class="nav__container">
      <RouterLink to="/"><h1 class="nav__header">Deckorated</h1></RouterLink>
      <div class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/collection">Collection</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </div>
  </nav>
</template>
