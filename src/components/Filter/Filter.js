import React from 'react';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../redux/actions/actionTypes';
import FilterButton from '../../containers/FilterButton';


export const Filter = () => {

	return (
		<div className="filter-wrap">
			<FilterButton
				filter={SHOW_ALL}
			>All</FilterButton>

			<FilterButton
				filter={SHOW_ACTIVE}
			>Active</FilterButton>

			<FilterButton
				filter={SHOW_COMPLETED}
			>Completed</FilterButton>
		</div>
	);
}