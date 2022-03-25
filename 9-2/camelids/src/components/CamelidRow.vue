<script setup>
const props = defineProps(["animal"]);
console.log(props.animal);
</script>
<template>
    <div>
      <h3>{{props.animal.commonName}}</h3>
      <p>Binomial Name: {{props.animal.binomialName}}</p>
      <p>Family: {{props.animal.family}}</p>
      <p>Genus: {{props.animal.genus}}</p>
      <p>Species: {{props.animal.species}}</p>
      <img v-bind:src="props.animal.image" v-bind:alt="props.animal.commonName">
    </div>
</template>
<style scoped>
div {
  max-width: 250px;
  border: 1px solid black;
  padding: 20px;
  margin: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
img {
  max-width: 250px;
  display: block;
}
h3 {
  font-size: 24px;
  color: forestgreen;
}
</style>