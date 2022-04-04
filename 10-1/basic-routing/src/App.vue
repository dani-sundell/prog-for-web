<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
 <div class="app-container">
   <nav>
     <RouterLink to="/">Home</RouterLink>
     <RouterLink to="/alpaca">Alpaca</RouterLink>
     <RouterLink to="/llama">Llama</RouterLink>
   </nav>
   <div class="content-container">
     <RouterView></RouterView>
   </div>
 </div>
</template>

<style>
  body {
    margin: 0;
  }

  .app-container {
    width: 80%;
    margin: 0 auto;
    padding: 0;
    background-color: #fff;
  }

  img {
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 80%;
    height: 45px;
    margin: 0 auto;
    padding: 20px 20px 0px 20px;
  }

  nav a {
    background: #7e80f8;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    text-decoration: none;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  nav a:hover {
    background:#5fc87a;
  }

  .router-link-active {
    background:#46995b;
  }

  .content-container {
    padding: 0 40px 40px 40px;
  }

  h1 {
    text-align: center;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 40px;
  }

  h3 {
    text-align: center;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 20px;
  }

  p {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 18px;
    line-height: 1.2;
    letter-spacing: .025rem;
  }

</style>
