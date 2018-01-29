import React from 'react';
import {withRouter} from 'react-router';

import './MealDetail.less';

class MealDetail extends React.Component {
	constructor() {
		super();

		this.state = {
			name: "",
			prepHours: 0,
			prepMinutes: 0,
			taste: 5,
			difficulty: 0
		}
	}

	handleSave = () => {
		const prepTime = parseInt(this.state.prepMinutes) + (parseInt(this.state.prepHours) * 60);
		const { name, taste, difficulty } = this.state;
		const newMeal = {
			name,
			prepTime,
			taste,
			difficulty
		};
		this.props.saveHandler(newMeal);
		this.props.history.push('/');
	};

	render() {
		return (
			<div id="main" className="container">
				<div className="row">
					<div className="col-xs-12 col-md-4">
						<input
							type="text"
							className="form-control"
							value={ this.state.name }
							onChange={ (event) => this.setState({name: event.target.value}) }/>
					</div>
					<div className="col-xs-12 col-md-8">
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 input-group">
						<p>
							<input
								id="prepHours" type="number"
								className="form-control smallInput"
								value={ this.state.prepHours }
								onChange={ (event) => this.setState({prepHours: event.target.value}) } />
							<label htmlFor="prepHours">hours</label>
						</p>
						<p>
							<input
								id="minutes"
								type="number"
								className="form-control smallInput"
								value={ this.state.prepMinutes }
								onChange={ (event) => this.setState({prepMinutes: event.target.value}) } />
							<label htmlFor="minutes">minutes</label>
						</p>
						<p>
							<input
								id="taste"
								type="number"
								className="form-control smallInput"
								value={ this.state.taste }
								onChange={ (event) => this.setState({taste: event.target.value}) } />
							<label htmlFor="taste">taste</label>
						</p>
						<p>
							<input
								id="difficulty"
								type="number"
								className="form-control smallInput"
								value={ this.state.difficulty }
								onChange={ (event) => this.setState({difficulty: event.target.value}) } />
							<label htmlFor="difficulty">difficulty</label>
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<button type="button" className="btn btn-default" onClick={ this.handleSave } >save</button>
						<router-link to="/">
							<a href="/"><button type="button" className="btn btn-default">cancel</button></a>
						</router-link>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(MealDetail);