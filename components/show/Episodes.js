import React from 'react'


/* components */
import { Table } from 'react-bootstrap'


/* styles */
import './_episodes.scss'


export default ({ episodesList }) => {

	const tableRow = ( key, item ) => {
		return (
			<tr key={ key } className="episodes__item episode">
				<td>
					{item.season}x{ (`0${item.number}`).slice(-2) }:
					<span className="episode__name">{item.name}</span>
				</td>
				<td className="episode__date">
					{ new Date(item.airdate).toDateString().split(' ').slice(1, -1).join(' ') }, {new Date(item.airdate).getFullYear()}
				</td>
				<td></td>
			</tr>
		)
	};

	return (
		<section>
			<h2>Previous Episodes</h2>
			<Table bordered className="episodes">
				<thead className="episodes__head">
				<tr>
					<th>Episode Name</th>
					<th>Airdate</th>
					<th>Trailer</th>
				</tr>
				</thead>
				<tbody className="episodes__content">
					{ episodesList.reverse().map( (item, key) => tableRow(key, item) ) }
				</tbody>
			</Table>
		</section>
	)
}
