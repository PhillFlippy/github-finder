import React, { useState, useContext } from 'react';

import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	const [text, setText] = useState('');

	const onChange = (e) => {
		setText(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			alertContext.setAlert('Please enter something', 'light');
		}
		githubContext.searchUsers(text);
		setText('');
	};
	const clearInput = (e) => {
		e.preventDefault();
		clearInput();
		setText('');
	};

	return (
		<div>
			<form className='form'>
				<input
					value={text}
					onChange={onChange}
					type='text'
					name='text'
					placeholder='search'
				/>
				<input
					onClick={onSubmit}
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
			</form>
			{githubContext.users.length > 0 && (
				<button
					className='btn btn-light btn-block'
					onClick={githubContext.clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
