import React from 'react';

import SortOption from './SortOption';


class SortingGroup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: ""
		}
	}

	handleSortRecentlyPrepared = () => {
		this.setState({selected: "recentlyUsed"});
		this.props.handleSorting("recentlyUsed");
	};

	handleSortLongestUnused = () => {
		this.setState({selected: "longestUnused"});
		this.props.handleSorting("longestUnused");
	};

	handleClearSorting = () => {
		return this.props.handleSorting("none");
	};

	render = () => {
		return (
			<div className="col-xs-12 col-md-9">
				<SortOption
					active={ this.state.selected === 'recentlyUsed' }
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