import React from 'react'
import Link from 'next/link'


/* components */
import { Figure } from 'react-bootstrap'


/* styles */
import './_item.scss'

const imageSourceDetect = ( imageSource ) => {
	if ( imageSource !== null ) return imageSource.medium;
	else return '/static/no-img-portrait.png';
};

const genresListDetect = ( genresList ) => {
	if ( genresList.length > 0 ) return genresList.toString().split(',').join(', ');
	else return 'Genres not available now';
};

export default ({ result }) => {

	return (
		<article className="col-12 col-lg-6 px-lg-3 result">
			<Figure className="col-4 px-1">
				<Figure.Image className="result__image" src={imageSourceDetect( result.show.image )} alt={result.show.name} />
			</Figure>

			<div className="col-8 px-1">
				<h3 className="mt-n2">
					<Link prefetch href={`/details?id=${result.show.id}`} as={`/details/${result.show.id}`}>
						<a className="result__name">{result.show.name}</a>
					</Link>
				</h3>
				<div className="result__genres">
					<span className="result__genres-title">Genres: </span>
					{ genresListDetect( result.show.genres ) }
				</div>
			</div>
		</article>
	)
}