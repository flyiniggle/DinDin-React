import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Toolbar from './Toolbar/Toolbar';
import Home from './Home/Home';
import MealDetail from '@/MealDetail/MealDetail';

import './App.less';


const App = function(props) {
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
};

export default App;
