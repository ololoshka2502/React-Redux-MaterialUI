import { combineReducers } from "redux";
import { todosReducer } from './todosReducer';
import { visibilityFilter } from './visibilityFilter';

export const rootReducer = combineReducers({
	todosState: todosReducer,
	visibilityFilter 
});