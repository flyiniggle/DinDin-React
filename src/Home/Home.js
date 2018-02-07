import React from "react";
import { observer } from "mobx-react";
import { map } from "ramda";

import { MealsListStore, createMealStore } from "@/stores/Home";
import FilterControls from "@/FilterControls/FilterControls"
import MealCard from "@/MealCard/MealCard";
import Overview from "@/Overview/Overview";


MealsListStore.init();

const renderMealCards = map((meal) => {
	return <MealCard meal={ createMealStore(meal) } key={ meal.id } />
});

const Home = observer(function(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-xs-12">
					<FilterControls meals={ props.meals } handleSorting={ props.handleSorting }/>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-md-4">
					<Overview meals={ MealsListStore.mealsList } />
				</div>
				<div className="col-xs-12 col-md-8">
					{ renderMealCards(MealsListStore.mealsList || []) }
				</div>
			</div>
		</div>
	)
});

export default Home;