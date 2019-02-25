import React, { Component } from 'react'
import Router from 'next/router'


/* state management */
import { connect } from 'react-redux'
import { fetchShowById } from '../actions/index'

/* components */
import { Container } from 'react-bootstrap'
import Show from '../components/show/Show'


class ShowDetails extends Component {

	componentDidMount() {
		const { dispatch ,showDetails } = this.props;

    if ( !Object.keys(showDetails).length ) dispatch( fetchShowById( Router.query.id ) )
	}

	render () {
		const { showDetails, isFetching } = this.props;
		return (
			<Container>
				{  isFetching &&
				<h3>Fetching ...</h3>
				}
				{  !isFetching && Object.keys(showDetails).length === 0 &&
				<h3>Oh caramba captain, search result is empty</h3>
				}
				{  !isFetching && Object.keys(showDetails).length > 0 &&
					<Show details={ showDetails } />
				}
			</Container>
		)
	}
}

function mapStateToProps(state) {
	const { showDetails, isFetching } = state.search ||
  { isFetching: true };
	return { showDetails, isFetching}
}

export default connect(mapStateToProps)(ShowDetails)
