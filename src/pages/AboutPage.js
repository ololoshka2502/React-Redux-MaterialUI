import React from 'react';
import { NavLink } from 'react-router-dom';

export const AboutPage = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Hello everywhere!</h1>
			<p className="lead">This is my about page</p>
			<hr className="my-4" />
			<p>About Page: version 1.0.0</p>
			<NavLink className="btn btn-primary btn-lg" to="/" exact>Go to Home Page</NavLink>
		</div>
	);
};