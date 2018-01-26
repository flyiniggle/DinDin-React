import React from "react";
import { last, map, pipe, reverse, slice } from 'ramda';

import { sortMostUsed, sortRecentlyPrepared } from "@/business/meals";

import "./Overview.less";

const Overview = function(props) {
	const meals = props.meals || [];
	const getFirstThree = slice(0, 3);
	const renderMealNamesList = map((meal) => <li>{meal.name}</li>);
	const threeMostPrepared = pipe(sortMostUsed, getFirstThree, renderMealNamesList);
	const threeLeastPrepared = pipe(sortMostUsed, reverse, getFirstThree, renderMealNamesList);
	const lastMeal = pipe(sortRecentlyPrepared, last);


	return (
		<div id="overview">
			<div className="row">
				<div className="col-xs-4 col-md-12">
					<h3>Last Meal</h3>
					<span>{ lastMeal.name }</span>
				</div>

				<div className="col-xs-4 col-md-12">
					<h3>Most Prepared</h3>
					<ul className="list-unstyled">
						{ threeMostPrepared(meals) }
					</ul>
				</div>

				<div className="col-xs-4 col-md-12">
					<h3>Least Prepared</h3>
					<ul className="list-unstyled">
						{ threeLeastPrepared(meals) }
					</ul>
				</div>
			</div>
		</div>
	)
};

export default Overview;