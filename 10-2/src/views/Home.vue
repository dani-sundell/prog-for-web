<script setup>
import { RouterLink } from 'vue-router'
import Music from '../data/music-list.json'
console.log(Music);
</script>

<template>
  <main>
    <h1>2019 Billboard top 50</h1>
    <div class="container">
      <div class="song-list-item" v-for="(song, index) in Music" v-bind:key="index">
        <RouterLink :to="'/song/' + song.slug">{{ song.title }}</RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>

h1 {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 80px;
  text-align: center;
}

.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}

.song-list-item {
  background-color: #000;
  height: 100px;
  padding: 20px;
  border-radius: 5px;
  margin: 10px;
  color: #fff;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.song-list-item a {
  color: #fff;
  text-decoration: none;
}

.song-list-item:hover {
  background: #fff;
  color: #000;
  border: 1px solid #000;
}

 .song-list-item:hover a {
  background: #fff;
  color: #000;
 }

</style>