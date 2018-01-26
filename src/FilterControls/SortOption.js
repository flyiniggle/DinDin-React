import React from "react";

import './SortOption.less';

const SortingOption = function(props) {
	return (
		<h4
			className={ `sortingOption ${props.active ? "selected" : ""}` }
			onClick={ props.active ? props.selectedHandler : props.unselectedHandler }>
			{ props.children }
		</h4>
	)
};

export default SortingOption;