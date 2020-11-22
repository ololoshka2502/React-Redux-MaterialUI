import React from 'react';
import { Filter } from '../components/Filter/Filter';
import Search from '../components/Search/Search';
import VisibleTodoList from '../containers/VisibleTodoList';

export const MainPage = () => {
	return (
		<div className="row">
			<div className="col-md-12">
				<Search />
				<Filter />
				<VisibleTodoList />
			</div>
		</div>
	);
};