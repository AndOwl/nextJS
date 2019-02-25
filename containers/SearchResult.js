import React, { Component } from 'react'
import Router from "next/router"


/* state management */
import { connect } from 'react-redux'
import {fetchFilmsByKeyword} from "../actions"


/* components */
import { Container, Row } from 'react-bootstrap'
import Results from '../components/results/List'


const QUERY_KEYWORD = 'keyword';


class SearchResult extends Component {

	componentDidMount() {
		const { dispatch, filmsList } = this.props;

		if (filmsList.length === 0) {
			dispatch( fetchFilmsByKeyword( Router.query[QUERY_KEYWORD] ) );
		}
	}

	render () {
		const { isFetching, filmsList } = this.props;
		return (
			<Container>
				<h1>Result</h1>
				{  isFetching &&
					<h3>Fetching ...</h3>
				}
				{  !isFetching && filmsList.length === 0 &&
					<h3>Oh caramba captain, search result is empty</h3>
				}
				{  !isFetching && filmsList.length > 0 &&
					<Row>
						<Results results={ filmsList } />
					</Row>
				}
			</Container>
		)
	}
}

function mapStateToProps(state) {
	const { filmsList, isFetching } = state.search ||
	{ isFetching: true };
	return { filmsList, isFetching }
}

export default connect(mapStateToProps)(SearchResult)
