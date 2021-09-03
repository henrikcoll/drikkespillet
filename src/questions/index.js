import no from './no'

const languages = {
	no
}

export {
	no
};

export function getQuestions(lang) {
	let questions = [
		...languages[lang]['never'],
		...languages[lang]['games'],
		...languages[lang]['tasks'],
		...languages[lang]['who'],
		...languages[lang]['wouldyou']
	]

	for (let i = questions.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[questions[i], questions[j]] = [questions[j], questions[i]];
	}

	for (let i = questions.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[questions[i], questions[j]] = [questions[j], questions[i]];
	}

	return questions
}