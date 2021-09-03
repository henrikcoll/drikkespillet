import never from './never.json'
import games from './games.json'
import tasks from './tasks.json'
import who from './who.json'
import wouldyou from './wouldyou.json'

export default {
	never: never.map(str => ({ color: 'gray', text: str })),
	games: games.map(str => ({ color: 'green', text: str })),
	tasks: tasks.map(str => ({ color: 'gray', text: str })),
	who: who.map(str => ({ color: 'gray', text: str })),
	wouldyou: wouldyou.map(str => ({ color: 'gray', text: str }))
}