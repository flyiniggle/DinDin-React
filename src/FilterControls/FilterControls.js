import React from 'react';

import SortingGroup from './SortingGroup';

import './FilterControls.less';


const FilterControls = function(props) {
	return (
		<div className="filterControlBox row">
			<div className="col-xs-12 col-md-9">
				<h3>Sort By:</h3>
				<SortingGroup meals={ props.meals } handleSorting={ props.handleSorting }/>
			</div>
			<div className="col-xs-12 col-md-3">
				<h3>Filter</h3>
				<input/>
			</div>
		</div>
	)
};

export default FilterControls;