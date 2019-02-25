import axios from 'axios';
import config from '../config/api.json'

const api = axios.create({
	baseURL: config.baseURL,
	timeout: config.timeout,
	responseType: config.responseType,
	withCredentials: config.withCredentials
});

export const RECEIVE_FILMS_BY_KEYWORD = 'RECEIVE_FILMS_BY_KEYWORD';
export const ADD_SEARCH_KEY = 'ADD_SEARCH_KEY';
export const RECEIVE_SHOW_BY_ID = 'RECEIVE_SHOW_BY_ID';



function receiveFilmsByKeyword ( json ) {
	return {
		type: RECEIVE_FILMS_BY_KEYWORD,
		filmsList: json
	}
}

export function addSearchKey ( key ) {
	return {
		type: ADD_SEARCH_KEY,
		key
	}
}

export function receiveShowById ( json ) {
	return {
		type: RECEIVE_SHOW_BY_ID,
		showDetails: json
	}
}


export function fetchFilmsByKeyword ( name ) {
	return dispatch => {
		return api.get(`/search/shows?q=${ name }`)
			.then(response => dispatch( receiveFilmsByKeyword(response.data) ))
	}
}



export function fetchShowById ( id ) {
	return dispatch => {
		return api.get(`/shows/${ id }?embed=episodes`)
			.then(response => dispatch( receiveShowById(response.data) ))
	}
}