import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';

import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_REPOS,
} from '../../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
	githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
	githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
	githubClientId = process.env.GITHUB_CLIENT_ID;
	githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};
	const [state, dispatch] = useReducer(GithubReducer, initialState);

	//Search User
	const searchUsers = async (text) => {
		setLoading();
		try {
			const response = await axios.get(
				`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
			);
			dispatch({
				type: SEARCH_USERS,
				payload: response.data.items,
			});
		} catch (e) {
			console.log(e);
		}
	};
	/**
	 * Get a single git hub user
	 */
	const getUser = async (username) => {
		setLoading(true);

		try {
			const response = await axios.get(
				`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
			);
			dispatch({
				type: GET_USER,
				payload: response.data,
			});
		} catch (e) {
			console.log(e);
		}
	};
	/**
	 * Get users repos
	 */
	const getUserRepos = async (userName) => {
		setLoading(true);

		try {
			const response = await axios.get(
				`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
			);
			dispatch({
				type: GET_REPOS,
				payload: response.data,
			});
		} catch (e) {
			console.log(e);
		}
	};
	//clear users
	const clearUsers = () => {
		dispatch({ type: CLEAR_USERS });
	};
	// set loading
	const setLoading = () =>
		dispatch({
			type: SET_LOADING,
		});
	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				loading: state.loading,
				repos: state.repos,
				searchUsers,
				clearUsers,
				getUser,
				getUserRepos,
			}}>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
