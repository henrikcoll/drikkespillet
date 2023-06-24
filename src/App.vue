<script setup>
import { ref } from 'vue';
import { loadCards } from './cards'

let playerInput = ref('');

let state = ref('players');
let players = ref([]);
let cards = ref([])
let turn = ref(0);

const card = ref(null);

function nextCard() {
  turn.value++;
  if (turn.value >= players.value.length) {
    turn.value = 0;
  }

  if (cards.value.length > 0) {
    card.value = cards.value.shift();
    document.body.style.backgroundColor = card.value.background;
  } else {
    startGame()
  }
}

function startGame() {
  cards.value = [
    ...loadCards(),
    {
      text: 'The End. Tap to play again',
      color: '#fff',
      background: '#000'
    }
  ];

  state.value = 'game'

  nextCard()
}

function addPlayer() {
  players.value.push(playerInput.value)
  playerInput.value = ''
}

</script>

<template>
  <div class="game" :style="{ 'background-color': card.background }" @click="nextCard" v-if="state === 'game'">
    <h1 :style="{ 'color': card.color }">{{ card.text.replace('$player', players[turn]) }}</h1>
  </div>
  <div class="player" v-if="state === 'players'">
    <div class="player-form">
      <input type="text" v-model="playerInput" @keydown.enter="addPlayer">
      <button @click="addPlayer">Add</button>
      <h2>Players:</h2>
      <span>{{ players.join(', ') }}</span>
      <button @click="startGame">Start</button>
    </div>
  </div>
</template>

<style scoped>
.game,
.player {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  text-align: center;
}

.game {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}

.player-form {
  max-width: 20rem;
}


h1 {
  width: 100%;
  text-align: center;
  font-size: 5rem;
}

input {
  width: 100%;
  border: none;
  margin: .25rem;
}

button {
  width: 100%;
  border: none;
  margin: .25rem;
  padding: 0.25rem;
}

@media only screen and (max-width: 1024px) {
  h1 {
    font-size: 2.5rem;
  }
}
</style>
