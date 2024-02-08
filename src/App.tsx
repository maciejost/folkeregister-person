import { useState } from 'react'

import './App.css'
import { people } from './data'

function App() {
	const [view, setView] = useState<'RANDOM' | 'LIST'>('RANDOM')
	const [person, setPerson] = useState(
		people[Math.floor(Math.random() * people.length)]
	)
	const [copied, setCopied] = useState(false)

	const Person = ({ person }: { person: (typeof people)[0] }) => {
		const [hasCopied, setHasCopied] = useState(false)

		return (
			<button
				onClick={() => {
					navigator.clipboard.writeText(person.ssn)
					setHasCopied(true)

					setTimeout(() => {
						setHasCopied(false)
					}, 2000)
				}}
			>
				<li>
					<p>
						{person.firstName} {person.lastName}
					</p>
					{hasCopied ? (
						<p>Kopiert til utklippstavlen</p>
					) : (
						<p>{person.ssn}</p>
					)}
				</li>
			</button>
		)
	}

	return (
		<>
			<div className='buttons nav'>
				<button onClick={() => setView('RANDOM')}>
					Tilfeldig person
				</button>
				<button onClick={() => setView('LIST')}>Listevisning</button>
			</div>
			{view === 'RANDOM' && (
				<div className='random'>
					<h1>
						{person.firstName} {person.lastName}
					</h1>
					<input
						readOnly
						value={person.ssn}
						onKeyUp={e => {
							if (e.key === 'Enter') {
								navigator.clipboard.writeText(person.ssn)
								setCopied(true)

								setTimeout(() => {
									setCopied(false)
								}, 2000)
							}
						}}
						onClick={() => {
							navigator.clipboard.writeText(person.ssn)
							setCopied(true)

							setTimeout(() => {
								setCopied(false)
							}, 2000)
						}}
					/>

					<div className='buttons'>
						<button
							onClick={() =>
								setPerson(
									people[
										Math.floor(
											Math.random() * people.length
										)
									]
								)
							}
						>
							Ny person
						</button>
						<button
							onClick={() => {
								navigator.clipboard.writeText(person.ssn)
								setCopied(true)

								setTimeout(() => {
									setCopied(false)
								}, 2000)
							}}
						>
							Koper til utklippstavlen
						</button>
					</div>
					{copied && (
						<p className='copied'>Kopiert til utklippstavlen</p>
					)}
				</div>
			)}
			{view === 'LIST' && (
				<div className='list'>
					<ul>
						{people.map((person, index) => (
							<Person key={index} person={person} />
						))}
					</ul>
				</div>
			)}
		</>
	)
}

export default App
