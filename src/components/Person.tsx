import { useState } from 'react'
import { people } from '../data'

export const Person = ({ person }: { person: (typeof people)[0] }) => {
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
