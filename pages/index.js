import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import Layout from '../components/layout/layout'
import SearchForm from '../containers/SearchForm'

export default class Index extends Component {

	render() {
		const head = {
			title: 'Test Quest'
		};
		return (
			<Layout head={ head } >
				<header className="header">
					<Container>
						<SearchForm />
					</Container>
				</header>
				<Container fluid className="">
					<Container>
						<h1 className='page__title'>Search index page</h1>
					</Container>
				</Container>
			</Layout>
		)
	}
}

