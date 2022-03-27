<script setup>
defineProps(["item"]);
console.log("item");
</script>

<template>
    <tr v-bind:class="{gift: item.methodOfAcquisition.includes('Gift') === true, purchased: item.methodOfAcquisition.includes('Purchased') === true}">
        <td colspan="1">{{item.deckName}}</td>
        <td><img :src="item.deckBox"></td>
        <td><img :src="item.cardBack"></td>
        <td><img :src="item.cardFace"></td>
        <td>{{item.originLocation}}</td>
        <td>{{item.methodOfAcquisition}}</td>
        <td><button type="button" v-on:click="$emit('deleteItem', item)">Delete</button></td>
    </tr>
</template>
