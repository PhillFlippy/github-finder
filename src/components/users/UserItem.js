import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const UserItem = ({
	user: { id, login, avatar_url: avatar, html_url: html }
}) => {
	return (
		<div className='card'>
			<img
				src={avatar}
				alt={id}
				className='round-img'
				style={{ width: '100px' }}
			/>
			<h3>{login}</h3>
			<div>
				<Link to={`/user/${login}`}>More</Link>
			</div>
		</div>
	);
};
UserItem.propTypes = {
	user: PropTypes.object.isRequired
};
export default UserItem;
