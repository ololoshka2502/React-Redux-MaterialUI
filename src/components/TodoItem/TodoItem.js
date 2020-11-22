import React from 'react';

const TodoItem = ({ todoText, creationDate, completed, onDelete, onComplete }) => {
	return (
		<div className={completed ? 'todo-item complete' : 'todo-item'}>
			<p>{todoText}</p>

			<div className="creation-date">
				<span>Date of creation: {creationDate}</span>
			</div>

			<button className="btn btn-outline-danger" onClick={(e) => onDelete(e)}>
				<svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
				</svg>
			</button>


			<button className="btn btn-outline-success" style={{ right: '70px' }} onClick={onComplete}>
				{
					completed

					? <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-clockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
						<path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
					  </svg>

					: <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
					  </svg>
				}
				
			</button>
		</div>
	);
};

export default TodoItem;