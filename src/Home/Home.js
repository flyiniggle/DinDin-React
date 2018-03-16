import React from "react";
import { observer } from "mobx-react";
import { map, pipe } from "ramda";

import { MealsListStore, createMealStore } from "@/stores/Home";
import { sortById, sortLeastRecentlyPrepared, sortRecentlyPrepared } from "@/business/sorting";
import FilterControls from "@/FilterControls/FilterControls"
import MealCard from "@/MealCard/MealCard";
import Overview from "@/Overview/Overview";


MealsListStore.init();

const renderMealCards = map((meal) => {
	return <MealCard meal={ createMealStore(meal) } key={ meal.id } />
});

const sorterFor = function(sortDirection) {
	let sorter;

	switch(sortDirection) {
	case "none":
		sorter = sortById;
		break;
	case "recentlyUsed":
		sorter = sortRecentlyPrepared;
		break;
	case "longestUnused":
		sorter = sortLeastRecentlyPrepared;
		break;
	default:
		sorter = sortById;
		break;
	}

	return sorter;
};

const renderSortedMealCards = pipe(
	sorterFor,
	MealsListStore.sorted,
	renderMealCards
);

@observer class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sorting: "none"
		}
	}

	handleSorting = (sort) => {
		this.setState({ sorting: sort });
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<FilterControls handleSorting={this.handleSorting}/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-4">
						<Overview meals={MealsListStore.mealsList || []}/>
					</div>
					<div className="col-xs-12 col-md-8">
						{renderSortedMealCards(this.state.sorting) || []}
					</div>
				</div>
			</div>
		);
	}
}

export default Home;