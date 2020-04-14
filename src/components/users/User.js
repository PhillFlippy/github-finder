import React, { Fragment, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

import GithubContext from '../../context/github/GithubContext';

const User = ({ match }) => {
	const githubContext = useContext(GithubContext);

	useEffect(() => {
		githubContext.getUser(match.params.login);
		githubContext.getUserRepos(match.params.login);
		// eslint-disable-next-line
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = githubContext.user;
	const { loading } = githubContext;
	const { repos } = githubContext;
	if (loading) return <Spinner />;
	return (
		<Fragment>
			<Link to='/'>Back</Link>
			Hireable:
			{hireable ? (
				<i className='fas fa-check text-success' />
			) : (
				<i className='fas fa-times-circle text-danger' />
			)}
			<div className='card grid-2'>
				<div className='all-center'>
					<img
						src={avatar_url}
						className='round-img'
						alt='user image'
						style={{ width: '100px' }}
					/>
					<h1>{name}</h1>
					<p>Location: {location}</p>
				</div>
				<div>
					{bio && (
						<Fragment>
							<h3>Bio</h3>
							<p>{bio}</p>
						</Fragment>
					)}
					<a href={html_url} className='btn btn-dark my-1'>
						Visit Github
					</a>
				</div>
			</div>
			<Repos repos={repos} />
		</Fragment>
	);
};

export default User;
