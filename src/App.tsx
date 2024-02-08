import { useState } from 'react'

import './App.css'

import { List } from './components/List'
import { Random } from './components/Random'

function App() {
	const [view, setView] = useState<'RANDOM' | 'LIST'>('RANDOM')

	return (
		<>
			<div className='buttons nav'>
				<button onClick={() => setView('RANDOM')}>
					Tilfeldig person
				</button>
				<button onClick={() => setView('LIST')}>Listevisning</button>
			</div>
			{view === 'RANDOM' && <Random />}
			{view === 'LIST' && <List />}
		</>
	)
}

export default App
