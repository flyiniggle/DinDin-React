import React from 'react';
import {pipe, reverse} from "ramda";

import SortOption from './SortOption';
import {sortRecentlyPrepared, sortById} from "@/business/meals";


class SortingGroup extends React.Component {
	constructor() {
		super();

		this.state = {
			selected: ""
		}
	}

	sortRecentlyPrepared = () => {
		this.setState({selected: "recentlyPrepared"});
		sortRecentlyPrepared(this.props.meals);
	};

	sortLongestUnused = () => {
		this.setState({selected: "longestUnused"});
		pipe(
			sortRecentlyPrepared,
			reverse
		)(this.props.meals)
	};

	handleSorting = (sortName, sorter) => {
		this.setState({selected: sortName});
		//mediator.$emit("sorted", sorter(this.props.meals));
	};

	clearSorting = () => {
		this.setState({selected: ""});
		//mediator.$emit("sorted", sortById(this.props.meals));
	};

	render = () => {
		return (
			<div className="col-xs-12 col-md-9">
				<SortOption
					active={ this.state.selected === 'recentlyPrepared' }
					selectedHandler={ this.sortRecentlyPrepared }
					unselectedHandler={ this.clearSorting }>recently used
				</SortOption>
				<SortOption
					active={ this.state.selected === "longestUnused" }
					selectedHandler={ this.sortLongestUnused}
					unselectedHandler={ this.clearSorting }>longest unused
				</SortOption>
			</div>
		)
	};
}

export default SortingGroup;