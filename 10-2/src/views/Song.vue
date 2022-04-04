<script setup>
import { useRoute } from 'vue-router';
import Music from '../data/music-list.json'
const route = useRoute();
console.log(route.params.slug);
const song = Music.find(song => {
  return song.slug === route.params.slug
})
</script>


<template>
  <div>
    <nav>
      <RouterLink to="/">Back to song list</RouterLink>
    </nav>
    <div class="song-detail" :class="{
      rising: song.rank > song.position.positionLastWeek,
      falling: song.rank < song.position.positionLastWeek,
      same: song.rank === song.position.positionLastWeek
      }">
      <h1>{{ song.rank }}. {{ song.title }}</h1>
      <img :src="song.cover" :alt="song.title" />
      <p><strong>Artist:</strong> {{ song.artist}}</p>
    </div>
  </div>
</template>

<style scoped>

nav {
  padding: 15px;
  background-color: #000;
  width: fit-content;
  border-radius: 5px;
  margin: 20px auto;
  color: #fff;
}

nav a:active, a:visited, a {
  text-decoration: none;
  color: #fff;
}

nav:hover {
  background-color: #df5947;
}

.song-detail {
  width: 50%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.rising {
  border: 3px solid #7fd36a;
  border-radius: 5px;
}

.falling {
  border: 3px solid #cc4a4a; 
  border-radius: 5px;
}

.same {
  border: 3px solid #2a55e4;
  border-radius: 5px;
}
</style>
