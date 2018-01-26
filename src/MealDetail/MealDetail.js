import React from 'react';

class MealDetail extends React.Component {
	constructor() {
		super();

		this.state = {
			prepHours: 0,
			prepMinutes: 0,
			taste: 5,
			difficulty: 0
		}
	}

	render() {
		return (
			<div id="main" className="container">
				<div className="row">
					<div className="col-xs-12 col-md-4">
						<input type="text" className="form-control" v-model="name"/>
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
								onInput={ (event) => this.setState({prepHours: event.target.value}) } />
							<label htmlFor="prepHours">hours</label>
						</p>
						<p>
							<input
								id="minutes"
								type="number"
								className="form-control smallInput"
								value={ this.state.prepHours }
								onInput={ (event) => this.setState({prepMinutes: event.target.value}) } />
							<label htmlFor="minutes">minutes</label>
						</p>
						<p>
							<input
								id="taste"
								type="number"
								className="form-control smallInput"
								value={ this.state.prepHours }
								onInput={ (event) => this.setState({taste: event.target.value}) } />
							<label htmlFor="taste">taste</label>
						</p>
						<p>
							<input
								id="difficulty"
								type="number"
								className="form-control smallInput"
								value={ this.state.prepHours }
								onInput={ (event) => this.setState({difficulty: event.target.value}) } />
							<label htmlFor="difficulty">difficulty</label>
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<button type="button" className="btn btn-default" onClick="save">save</button>
						<router-link to="/">
							<button type="button" className="btn btn-default">cancel</button>
						</router-link>
					</div>
				</div>
			</div>
		)
	}
}

export default MealDetail;