import React from "react";
import { map, curry } from "ramda";

import FilterControls from "@/FilterControls/FilterControls"
import MealCard from "@/MealCard/MealCard";
import Overview from "@/Overview/Overview";


const markUsed = curry(function(mealId, event) {
	console.log(mealId)
});

const renderMealCards = map((meal) => {
	return <MealCard meal={ meal } key={ meal.id } markUsed={ markUsed(meal.id) }/>
});

const Home = function(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-xs-12">
					<FilterControls meals={ props.meals }/>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-md-4">
					<Overview meals={ props.meals }/>
				</div>
				<div className="col-xs-12 col-md-8">
					{ renderMealCards(props.meals || []) }
				</div>
			</div>
		</div>
	)
};

export default Home;