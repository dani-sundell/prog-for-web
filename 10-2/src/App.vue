<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <div>
     <nav>
       <RouterLink to="/" style="display: none;">Home</RouterLink>
     </nav>
       <RouterView></RouterView>
   </div>
</template>

<style>

</style>
