import React from 'react'
import renderHTML from 'react-render-html'


/* components */
import { Figure } from 'react-bootstrap'
import Episodes from './Episodes'


/* styles */
import './_show.scss'


export default ({ details }) => (
	<div>
		<h1 className='page__title'>{details.name}</h1>
		<section className="details">
			<aside>
				<Figure>
					<Figure.Image src={ details.image.medium } alt={ details.name }/>
				</Figure>
			</aside>
			<article className="details__caption"> { renderHTML(details.summary) } </article>
		</section>
		<Episodes episodesList={ details._embedded.episodes }/>
	</div>
)
