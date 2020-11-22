import {
	DELETE_TODO,
	ADD_TODO,
	COMPLETE_TODO
} from "../actions/actionTypes";

import { v4 as uuidv4 } from 'uuid';


const addZero = (param) => {
	if (param < 10) {
		return `0${param}`;
	} else {
		return param;
	}
};

const getTime = () => {
	const today = new Date();
	const time = `${addZero(today.getHours())}:${addZero(today.getMinutes())}:${addZero(today.getSeconds())}`;
	return time;
};

const getDate = () => {
	const today = new Date();
	const date = `${addZero(today.getDate())}-${addZero(today.getMonth() + 1)}-${today.getFullYear()}`;
	return date;
};
const initialState = {
	todos: []
};

export const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_TODO:
			const idx = action.payload;
			const itemIndex = state.todos.findIndex(todo => todo.id === idx);

			return {
				...state,
				todos: [
					...state.todos.slice(0, itemIndex),
					...state.todos.slice(itemIndex + 1)
				]
			};

		case ADD_TODO:
			let newTodo = {
				id: uuidv4(),
				completed: false,
				todoText: action.payload,
				creationDate: `${getTime()}, ${getDate()}`,
			};

			return {
				...state,
				todos: [
					...state.todos, newTodo
				]
			};

		case COMPLETE_TODO:
			const cid = state.todos.findIndex(todo => todo.id === action.payload);
	
			return {
				...state,
				todos: [
					...state.todos.slice(0, cid),
					{
						...state.todos[cid],
						completed: !state.todos[cid].completed
					},
					...state.todos.slice(cid + 1)
				]
			};

		default:
			return state;
	};
};