import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {addIndex, append, curry, evolve, inc, map, pipe, omit, when} from "ramda";

import Toolbar from './Toolbar/Toolbar';
import Home from './Home/Home';
import MealDetail from '@/MealDetail/MealDetail';
import {sortById} from '@/business/meals';
import MealService from '@/services/meals';

import './App.less';


const identifyMeal = (meal, id) => Object.assign({id}, meal);

const unIdentifyMeal = (meal) => omit("id", meal);

const mapWithIndex = addIndex(map);

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
	constructor(props) {
		super(props);
		this.state = {
			meals: [{}]
		}
	}

	handleSorting = (meals = []) => this.setState({meals});

	handleUseIt = (index) => {
		const meals = updateMealAtIndex(index, this.state.meals);

		this.setState({meals});

		pipe(
			sortById,
			map(unIdentifyMeal),
			MealService.post
		)(meals);
	};

	handleSaveNewMeal = (newMeal) => {
		const taggedNewMeal = identifyMeal(newMeal, this.state.meals.length);
		const meals = append(taggedNewMeal, this.state.meals);

		this.setState({meals});

		pipe(
			sortById,
			map(unIdentifyMeal),
			MealService.post
		)(meals);
	};

	componentDidMount() {
		MealService.get()
			.then(mapWithIndex(identifyMeal))
			.then(data => this.setState({ meals: data }));
	}

	render() {
		return (
			<div className="container-fluid">
				<Toolbar />
				<BrowserRouter>
					<div>
						<Route exact path='/' render={ props => <Home {...props } meals={ this.state.meals } handleSorting={ this.handleSorting } handleUseIt={ this.handleUseIt }/> }/>
						<Route path="/createMeal" render={ props => <MealDetail {...props} saveHandler={ this.handleSaveNewMeal } /> } />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
