import { people } from '../data'
import { Person } from './Person'

export const List = () => {
	return (
		<div className='list'>
			<ul>
				{people.map((person, index) => (
					<Person key={index} person={person} />
				))}
			</ul>
		</div>
	)
}
