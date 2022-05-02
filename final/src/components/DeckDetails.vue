<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps(["item", "index"]);
console.log("the item", props.item);
</script>

<template>
<RouterLink :to="'/collection/' + item.id">
    <div class="deck-row">
        <div class="deck-name">{{item.deckName}}</div>
        <div><img :src="item.cardBack"></div>
    </div>
</RouterLink>
</template>