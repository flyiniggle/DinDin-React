import React from 'react';

import logo from "../assets/Din-Din Logo.png";
import "./Toolbar.less"

const Toolbar = function() {
	return (
		<div id="toolbar" className="container-fluid">
			<div className="row">
				<div className="col-xs-4 col-lg-1">
					<img id="logo" src={ logo } alt="Din Din Logo"/>
				</div>
				<div className="col-xs-4 col-lg-2">
					<router-link to="createMeal"><a href="/createMeal"><h3 className="nav">New Meal</h3></a></router-link>
				</div>
				<div className="col-xs-4 col-lg-2">
					<router-link to="createMeal"><h3 className="nav">Random Meal</h3></router-link>
				</div>
			</div>
		</div>
	);
};

export default Toolbar;