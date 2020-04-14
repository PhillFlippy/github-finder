import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
	const alertContext = useContext(AlertContext);
	const { alert } = alertContext;
	return (
		alert != null && (
			<div className={`alert alert-${alert.type}`}>
				<i className='fas fa-info-circle'></i>
				{alert.msg}
			</div>
		)
	);
};
Alert.propTypes = {
	alert: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

export default Alert;
