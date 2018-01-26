import React from "react";
import { map, curry } from "ramda";

import MealCard from "@/MealCard/MealCard";

const markUsed = curry(function(mealId, event) {
	console.log(mealId)
});

const renderMealCards = map((meal) => {
	console.log(meal)
	return <MealCard meal={ meal } key={ meal.id } markUsed={ markUsed(meal.id) }/>
});

const Home = function(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-xs-12">
					<p>filter controls</p>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-md-4">
					<p>overview!</p>
				</div>
				<div className="col-xs-12 col-md-8">
					{ renderMealCards(props.meals || []) }
				</div>
			</div>
		</div>
	)
};

export default Home;