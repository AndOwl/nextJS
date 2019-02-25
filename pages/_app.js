import React from 'react'
import App, { Container } from 'next/app'

import { Provider } from 'react-redux'
import { withRouter } from 'next/router'
import { initializeStore } from '../store'
import reduxWrapper from 'next-redux-wrapper'


class NewApp extends App {

	render () {
		const { Component, store, router } = this.props;
		return (
			<Container className="enable-responsive-font-size">
				<Provider store={ store }>
					<Component router={ router } />
				</Provider>
			</Container>
		)
	}
}

export default withRouter(reduxWrapper(initializeStore)(NewApp))
