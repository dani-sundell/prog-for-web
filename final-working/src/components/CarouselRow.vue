<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps(["item", "index"]);
</script>

<template>
<RouterLink :to="'/collection/' + item.id">
    <div class="carousel-row">
        <div class="carousel-img"><img :src="item.cardBack"></div>
        <div class="carousel-name">{{item.deckName}}</div>
    </div>
</RouterLink>
</template>
