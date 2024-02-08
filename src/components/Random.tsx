import { useState } from 'react'
import { people } from '../data'

export const Random = () => {
	const [person, setPerson] = useState(
		people[Math.floor(Math.random() * people.length)]
	)
	const [copied, setCopied] = useState(false)

	return (
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
					onClick={() => {
						setPerson(
							people[Math.floor(Math.random() * people.length)]
						)
						setCopied(false)
					}}
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
			{copied && <p className='copied'>Kopiert til utklippstavlen</p>}
		</div>
	)
}
