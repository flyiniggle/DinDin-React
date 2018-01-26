import React from 'react';
import {adjust, pipe, reverse} from "ramda";

import SortOption from './SortOption';
import {sortRecentlyPrepared, sortById} from "@/business/meals";




class SortingGroup extends React.Component {
	constructor() {
		super();

		this.state = {
			selected: ""
		}
	}

	handleSortRecentlyPrepared = () => {
		this.setState({selected: "recentlyPrepared"});
		pipe(
			sortRecentlyPrepared,
			this.props.handleSorting
		)(this.props.meals);
	};

	handleSortLongestUnused = () => {
		this.setState({selected: "longestUnused"});
		pipe(
			sortRecentlyPrepared,
			reverse,
			this.props.handleSorting
		)(this.props.meals)
	};

	handleClearSorting = () => {
		this.setState({selected: ""});
		pipe(
			sortById,
			this.props.handleSorting
		)(this.props.meals);
	};

	handleUseIt = () => {
		pipe(
			sortById,

		)
	}

	render = () => {
		return (
			<div className="col-xs-12 col-md-9">
				<SortOption
					active={ this.state.selected === 'recentlyPrepared' }
					selectedHandler={ this.handleSortRecentlyPrepared }
					unselectedHandler={ this.handleClearSorting }>recently used
				</SortOption>
				<SortOption
					active={ this.state.selected === "longestUnused" }
					selectedHandler={ this.handleSortLongestUnused}
					unselectedHandler={ this.handleClearSorting }>longest unused
				</SortOption>
			</div>
		)
	};
}

export default SortingGroup;