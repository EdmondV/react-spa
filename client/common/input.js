import React from 'react';

const Input = ({ value, ...rest }) => {
	return (
		<input { ...rest } value={value} />
	)
}

export default Input