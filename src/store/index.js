import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		players: [],
		questions: []
	},
	mutations: {
		addPlayer(state, name) {
			state.players.push(name);
		},
		removePlayer(state, name) {
			const index = state.players.indexOf(name);
			if (index !== -1) {
				state.players.splice(index, 1);
			}
		},
		setQuestions(state, questions) {
			state.questions = questions
		},
		nextQuestion(state) {
			state.questions.shift()
		}
	},
	actions: {},
	modules: {},
});
