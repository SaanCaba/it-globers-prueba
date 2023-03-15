import React from 'react';

import './errorMessage.scss';

const ErrorMessage = ({ message }) => {
	return <span className='errorMessage'>{message}</span>;
};

export default ErrorMessage;
