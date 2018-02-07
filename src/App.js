import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {curry, evolve, inc, map, when} from "ramda";

import Toolbar from './Toolbar/Toolbar';
import Home from './Home/Home';
import MealDetail from '@/MealDetail/MealDetail';
import {sortById} from '@/business/sorting';

import './App.less';


const useMeal = evolve({
	lastUsed: () => Date.now(),
	usedCount: inc
});

const mealMatchesIndex = curry((index, meal) => meal.id === index);

const updateMealAtIndex = function(index, meals) {
	let useMealAtIndex = when(mealMatchesIndex(index), useMeal);

	return map(useMealAtIndex, meals);
};

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Toolbar />
				<BrowserRouter>
					<div>
						<Route exact path='/' render={ props => <Home {...props } /> }/>
						<Route path="/createMeal" render={ props => <MealDetail {...props}/> } />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
