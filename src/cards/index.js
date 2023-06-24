import rawCards from './cards.json'

console.log('rawCards', rawCards)


export function loadCards() {
	const cards = []

	for (let card of rawCards) {
		console.log('typeof card.count', typeof card.count)
		if (typeof card.count == 'number') {
			for (let i = 0; i < card.count; i++) {
				cards.push({
					text: card.text,
					color: card.color,
					background: card.background
				})
			}
		}
	}

	for (let i = cards.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[cards[i], cards[j]] = [cards[j], cards[i]];
	}

	for (let i = cards.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[cards[i], cards[j]] = [cards[j], cards[i]];
	}

	return cards
}