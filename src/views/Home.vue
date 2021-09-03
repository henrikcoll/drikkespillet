<template>
	<div class="home">
		<div class="title-container">
			<h1>DrikkeSpillet</h1>
			<img src="/img/logo.png" width="128" height="128" alt="" />
		</div>
		<div class="container">
			<div class="players">
				<span
					class="player"
					v-for="player in players"
					:key="player"
					@click="remove(player)"
				>
					{{ player }}
					<button>X</button>
				</span>
			</div>
			<div class="inputContainer">
				<input type="text" @keypress.enter="add" v-model="newPlayer" />
				<button class="button" id="add" @click="add">Add</button>
				<button
					id="go"
					@click="go"
					class="button"
					:class="{ disabled: players.length == 0 }"
					:disabled="players.length == 0"
				>
					Start
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
import { getQuestions } from "@/questions";

export default {
	name: "Home",
	data: () => ({
		newPlayer: "",
	}),
	methods: {
		...mapMutations(["addPlayer", "removePlayer", "setQuestions"]),
		add() {
			if (this.newPlayer === "") return;
			this.addPlayer(this.newPlayer);
			this.newPlayer = "";
		},
		remove(player) {
			this.removePlayer(player);
		},
		go() {
			this.setQuestions(getQuestions("no"));
			this.$router.push({ name: "Game" });
		},
	},
	computed: {
		players() {
			return this.$store.state.players;
		},
	},
};
</script>

<style scoped>
.home {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}

.title-container {
	display: flex;
	flex-direction: column;
	align-items: center;
}

h1 {
	text-align: center;
	font-size: 5rem;
	margin-bottom: 0;
}

input {
	padding: 0.25rem;
	margin: 0.5rem;
	border: none;
	background-color: #ecf0f1;
	color: #2c3e50;
	flex-grow: 1;
	font-size: 1rem;
	border-radius: 5px;
}

.players {
	display: flex;
	flex-wrap: wrap;
	width: 40%;
	max-width: 40%;
	min-height: 5rem;
	align-items: end;
}

.player {
	background-color: #ecf0f1;
	color: #2c3e50;
	padding: 0.25rem 0.5rem;
	cursor: pointer;
	margin: 0.5rem 0.25rem;
	border-radius: 5px;
	height: fit-content;
}

.player button {
	border: none;
}

.container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.inputContainer {
	display: flex;
	flex-direction: row;
	width: 40%;
	align-items: center;
}

.button {
	border: none;
	height: 1.7rem;
	padding: 0 0.5rem;
	margin: 0;
	background-color: #ecf0f1;
	color: #2c3e50;
	margin: 0.5rem 0;
	border-radius: 5px;
}

.button:hover {
	background-color: #bdc3c7;
	color: #2c3e50;
	cursor: pointer;
}

.button.disabled {
	cursor: unset;
	background-color: #ecf0f1;
	color: #2c3e50;
}

.button.disabled:hover {
	cursor: unset;
	background-color: #ecf0f1;
	color: #2c3e50;
}

@media only screen and (max-width: 1024px) {
	h1 {
		font-size: 4rem;
	}

	input {
		margin: 0;
		border-radius: 0;
		font-size: 1rem;
	}

	.players {
		width: 100%;
		max-width: 100%;
	}

	.inputContainer {
		width: 100%;
		background-color: #ecf0f1;
	}

	.button:hover {
		background-color: #ecf0f1;
		color: #2c3e50;
		cursor: pointer;
	}
}
</style>