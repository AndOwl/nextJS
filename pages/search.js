import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import { fetchFilmsByKeyword } from '../actions/index'

import Layout from '../components/layout/layout'
import SearchForm from '../containers/SearchForm'
import SearchResult from '../containers/SearchResult'

const QUERY_KEYWORD = 'keyword';

export default class Search extends Component {

	static getInitialProps ({ query, store }) {
		console.log(query);
		return store.dispatch( fetchFilmsByKeyword( query[QUERY_KEYWORD] ) )
			.then( );
	}

	render() {
		const head = {
			title: 'Search Result'
		};
		return (
			<Layout head={ head } >
				<header className="header">
					<Container>
						<SearchForm />
					</Container>
				</header>
				<SearchResult />
			</Layout>
		)
	}
}

