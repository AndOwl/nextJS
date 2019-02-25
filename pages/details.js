import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import { fetchShowById } from "../actions";

import Layout from '../components/layout/layout'
import SearchForm from '../containers/SearchForm'
import ShowDetails from '../containers/ShowDetails'


export default class Details extends Component {

	static getInitialProps ({ query, store  }) {
		return store.dispatch( fetchShowById( query.id ) )
			.then( );
	}


	render () {
		const head = {
			title: 'Detailed'
		};
		return (
			<Layout head={ head } >
				<header className="header">
					<Container>
						<SearchForm />
					</Container>
				</header>
				<ShowDetails />
			</Layout>
		)
	}
}