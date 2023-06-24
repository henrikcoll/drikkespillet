<script setup>
import { ref } from 'vue';
import { loadCards } from './cards'

const cards = loadCards();
const card = ref(null);

console.log(cards)

function nextCard() {
  card.value = cards.shift();
}

nextCard()


</script>

<template>
  <div class="game" :style="{'background-color': card.background}" @click="nextCard">
    <h1  :style="{'color': card.color}">{{ card.text }}</h1>
  </div>
</template>

<style scoped>

.game {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
}

h1 {
  width: 100%;
  text-align: center;
  font-size: 5rem;
}

@media only screen and (max-width: 1024px) {
  h1 {
    font-size: 2.5rem;
  }
}
</style>
