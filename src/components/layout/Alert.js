import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert, type }) =>
	alert != null && (
		<div className={`alert alert-${type}`}>
			<i className='fas fa-info-circle'></i>
			{alert}
		</div>
	);

Alert.propTypes = {
	alert: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
};

export default Alert;
