import { makeStyles, TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions/actions';

const useStyles = makeStyles({
	input: {
		width: '100%',
		maxWidth: 'calc(100% - 140px)',
		height: '40px',
		color: '#fff',
		top: '-7px',

		'& .MuiInput-underline:hover:not(.Mui-disabled):before': {
			borderBottom: '2px solid transparent',
		},

		'& .MuiFormLabel-root': {
			color: 'rgba(255, 255, 255, .55)',
		},

		'& .MuiInputBase-input': {
			color: '#fff'
		},

		'& .MuiInput-underline:after': {
			borderBottom: '2px solid #333'
		},

		'& .MuiInput-underline:before': {
			borderBottom: '2px solid #333'
		},
	},

	button: {
		padding: '6px 15px',
		outline: 'none !important'
	}
});

const Search = ({ addTodo }) => {
	const classes = useStyles();

	const initialState = {
		text: ''
	};

	const [state, setState] = useState(initialState);

	const handleChangeInput = (e) => {
		setState({
			text: e.target.value
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (state.text.trim() === '') {
			return false;
		}

		addTodo(state.text);
		setState({ text: '' });
	};


	return (
		<div className="search input-group">
			<TextField
				className={classes.input}
				type="text"
				label="Write your todo text here"
				value={state.text}
				placeholder=''
				onChange={(e) => handleChangeInput(e)}
			/>

			<div className="input-group-append">
				<Button
					variant="contained"
					color="primary"
					type="button"
					className={classes.button}
					onClick={(e) => onSubmit(e)}
					startIcon={<AddIcon />}
				>Add todo</Button>
			</div>
		</div>
	);
};


const mapDispatchToProps = {
	addTodo
};

export default connect(null, mapDispatchToProps)(Search);