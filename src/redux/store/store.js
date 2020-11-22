import { createStore } from 'redux';
import { rootReducer } from '../reducers';

const persistedState = localStorage.getItem('ReduxState') ? JSON.parse(localStorage.getItem('ReduxState')) : {};
export const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
	localStorage.setItem('ReduxState', JSON.stringify(store.getState()));
});