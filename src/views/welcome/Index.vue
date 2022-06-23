<template>
  <div>welcome</div>
  <img src="../../assets/img/register.svg" />
  <img :src="imgSrc" />
  <img :src="image" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import image from '../../assets/img/register.svg';
// 	http://localhost:3000/src/assets/img/register.svg
const imgSrc = ref('/src/assets/img/register.svg');
console.log('img', image, image === '/src/assets/img/register.svg'); // true
</script>

<style scoped>
img {
  width: 200px;
}
</style>
