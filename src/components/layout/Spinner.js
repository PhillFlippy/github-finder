import React, { Fragment } from 'react';
import spinner from './spinner.gif';
import PropTypes from 'prop-types';

const Spinner = props => (
	<Fragment>
		<img
			src={spinner}
			alt='loading ...'
			style={{ width: '200px', margin: 'auto', display: 'block' }}
		/>
	</Fragment>
);

Spinner.propTypes = {};

export default Spinner;
