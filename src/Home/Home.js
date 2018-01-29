import React from "react";
import { map, curry } from "ramda";

import FilterControls from "@/FilterControls/FilterControls"
import MealCard from "@/MealCard/MealCard";
import Overview from "@/Overview/Overview";


const renderMealCards = (handler) => map((meal) => {
	return <MealCard meal={ meal } key={ meal.id } handleUseIt={ handler.bind(null, meal.id) }/>
});

const Home = function(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-xs-12">
					<FilterControls meals={ props.meals } handleSorting={ props.handleSorting }/>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-md-4">
					<Overview meals={ props.meals } />
				</div>
				<div className="col-xs-12 col-md-8">
					{ renderMealCards(props.handleUseIt)(props.meals || []) }
				</div>
			</div>
		</div>
	)
};

export default Home;