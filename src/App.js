import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {addIndex, map, pipe, omit, when} from "ramda";

import Toolbar from './Toolbar/Toolbar';
import Home from './Home/Home';
import {sortById} from '@/business/meals';
import MealService from '@/services/meals';

import './App.less';


const identifyMeal = (meal, id) => Object.assign({id}, meal);

const unIdentifyMeal = (meal) => omit("id", meal);

const mapWithIndex = addIndex(map);

const updateMealLastUsed = (meal) => Object.assign(meal, {lastUsed: Date.now()});

const updateMealAtIndex = function(index, meals) {
	let updateMatchingMeal = when((meal) => meal.id === index, updateMealLastUsed);

	return map(updateMatchingMeal, meals)
};

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			meals: [{}]
		}
	}

	handleSorting = (meals = []) => this.setState({meals});

	handleUseIt = (index) => {

		const meals = updateMealAtIndex(index, this.state.meals);

		this.setState({meals});

		pipe(
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
					<Route path='/' render={ props => <Home {...props } meals={ this.state.meals } handleSorting={ this.handleSorting } handleUseIt={ this.handleUseIt }/> }/>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
