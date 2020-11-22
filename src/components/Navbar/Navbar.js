import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div className="navbar navbar-expand-lg navbar-dark">
			<NavLink className="navbar-brand" to="/">My To Do</NavLink>

			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<NavLink className="nav-link" to='/' exact >Home</NavLink>
				</li>

				<li className="nav-item">
					<NavLink className="nav-link" to='/about'>About</NavLink>
				</li>
			</ul>
		</div>
	);
};