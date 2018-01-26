import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import { map, addIndex} from "ramda";

import Toolbar from './Toolbar/Toolbar';
import Home from './Home/Home';
import MealService from '@/services/meals';

import './App.less';


const identifyMeal = (meal, id) => Object.assign({id}, meal);
const mapWithIndex = addIndex(map);

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			meals: [{}]
		}
	}

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
					<Route path='/' render={ props => <Home {...props } meals={ this.state.meals }/> }/>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
