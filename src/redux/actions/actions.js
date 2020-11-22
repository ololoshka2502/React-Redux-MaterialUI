import { DELETE_TODO, ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from './actionTypes';

export const deleteTodo = id => {
	return {
		type: DELETE_TODO,
		payload: id
	};
};

export const addTodo = text => {
	return {
		type: ADD_TODO,
		payload: text
	};
};

export const completeTodo = id => {
	return {
		type: COMPLETE_TODO,
		payload: id
	};
};

export const setVisibilityFilter = filter => {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	};
};