import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList/TodoList';
import { deleteTodo, completeTodo } from '../redux/actions/actions';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../redux/actions/actionTypes';

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case SHOW_ALL:
			return todos;

		case SHOW_COMPLETED:
			return todos.filter(todo => todo.completed);

		case SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed);

		default:
			throw new Error('Unknown filter: ' + filter);
	};
};

const mapStateToProps = state => {
	return {
		todos: getVisibleTodos(state.todosState.todos, state.visibilityFilter)
	};	
};

const mapDispatchToProps = {
	deleteTodo, completeTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);