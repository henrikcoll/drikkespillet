<template>
	<div class="game" @click="next">
		<h1>{{ questionText }}</h1>
	</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
	name: "Home",
	mounted() {
		if (!this.question) this.$router.push({ name: "Home" });
		this.randomizePlayers();
	},
	data: () => ({
		randPlayers: [],
	}),
	methods: {
		...mapMutations(["nextQuestion"]),
		next() {
			this.nextQuestion();
		},
		randomizePlayers() {
			let players = [...this.$store.state.players];
			for (let i = players.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[players[i], players[j]] = [players[j], players[i]];
			}
			this.randPlayers = players;
		},
	},
	computed: {
		question() {
			return this.$store.state.questions[0];
		},
		questionText() {
			if (!this.question) return "";
			return this.question.text.replaceAll("$player", () =>
				this.randPlayers.shift()
			);
		},
	},
	watch: {
		question(/* newQuestion, oldQuestion */) {
			if (!this.question) this.$router.push({ name: "Home" });
			this.randomizePlayers();

			document.body.classList.forEach(
				(v) => v.startsWith("bg-") && document.body.classList.remove(v)
			);
			document.body.classList.add(`bg-${this.question.color || "gray"}`);
		},
	},
};
</script>

<style scoped>
.game {
	width: 100%;
	height: 100%;
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