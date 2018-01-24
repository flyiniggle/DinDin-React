import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Toolbar from './Toolbar/Toolbar';
import Home from './Home/Home';
import'../node_modules/bootstrap/less/bootstrap.less'

const App = function() {
    return (
    	<div className="container-fluid">
			<Toolbar />
			<BrowserRouter>
				<Route path='/' component={Home} />
			</BrowserRouter>
		</div>
	);
};

export default App;
