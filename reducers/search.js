import { RECEIVE_FILMS_BY_KEYWORD, ADD_SEARCH_KEY, RECEIVE_SHOW_BY_ID } from '../actions'

const initialState = {
	searchKey: '',
	filmsList: [],
	showDetails: {},
};

function filmsRequest(state = initialState, action) {
	switch ( action.type ) {
		case RECEIVE_FILMS_BY_KEYWORD:
			return Object.assign({}, state, {
				filmsList: action.filmsList,
				isFetching: false
			});
		case ADD_SEARCH_KEY:
			return Object.assign({}, state, {
				searchKey: action.key
			});
		case RECEIVE_SHOW_BY_ID:
			return Object.assign({}, state, {
				showDetails: action.showDetails,
				isFetching: false
			});
		default:
			return state
	}
}


export default filmsRequest;