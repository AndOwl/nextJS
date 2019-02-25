import React, { Component } from 'react'
import Router from "next/router";


/* sate management */
import {addSearchKey} from "../actions";
import {connect} from "react-redux";


/* components */
import SearchString from '../components/search/SearchString'

class SearchForm extends Component {

	handleSearchByKeyword( event ) {
		event.preventDefault();

		const { dispatch } = this.props;
		const searchKey = event.target.elements.keyword.value;

		dispatch( addSearchKey( searchKey ));
		Router.push({
			pathname: '/search',
			query: {
				'keyword': `${event.target.elements.keyword.value}`
			}
		});
	}

	render() {
		return (
			<div className="search py-4 col-lg-12 px-0">
				<SearchString handleSearch={ this.handleSearchByKeyword.bind(this) } />
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { searchKey } = state.search;
	return { searchKey }
}

export default connect(mapStateToProps)(SearchForm)