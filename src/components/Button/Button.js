import React from 'react';
import ButtonUI from '@material-ui/core/Button';

export const Button = ({ active, children, onFilter }) => {
	return (
		<ButtonUI
			variant="contained"
			className={active ? 'disabled' : null}
			color="primary"
			onClick={onFilter}
		>{children}
		</ButtonUI>
	);
};