import React from "react";

import './SortOption.less';

const handleClick = function(active, selectHandler, unselectHandler) {
	return !active ? selectHandler: unselectHandler;
};

const SortingOption = function(props) {
	return (
		<h4
			className={ `sortingOption ${props.active ? "selected" : ""}` }
			onClick={ handleClick(props.active, props.selectedHandler, props.unselectedHandler) }>
			{ props.children }
		</h4>
	)
};

export default SortingOption;