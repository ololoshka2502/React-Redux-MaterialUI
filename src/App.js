import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { AboutPage } from './pages/AboutPage';
import { Navbar } from './components/Navbar/Navbar';
import './App.scss';


function App() {
	return (
		<Router>
			<Navbar />

			<div className="container pt-5">

				<Switch>
					<Route path={'/'} exact component={MainPage} />
					<Route path={'/about'} component={AboutPage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
