import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TodoItem from '../TodoItem/TodoItem';

export const TodoList = ({ todos, deleteTodo, completeTodo }) => {
	return (
		<TransitionGroup component="div" className="todo-wrap pt-3">
			{todos && todos.length
				? todos.map(item => {
					return (
						<CSSTransition
							key={item.id}
							classNames='todo-item-transition'
							timeout={500}
							unmountOnExit
							mountOnEnter
						>
							<TodoItem
								{...item}
								onDelete={() => deleteTodo(item.id)}
								onComplete={() => completeTodo(item.id)}
							/>
						</CSSTransition>
					)
				})

				: <CSSTransition
					classNames='fade-transition'
					timeout={500}
					unmountOnExit
					mountOnEnter
				>
					<p style={{ color: '#fff' }}>Nothing found <span role="img" aria-label="">☹️</span></p>
				</CSSTransition>
			}
		</TransitionGroup>
	)
};