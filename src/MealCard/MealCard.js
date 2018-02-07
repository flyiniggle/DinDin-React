import React from "react";
import { observer } from "mobx-react";
import moment from "moment";
import "./MealCard.less";

function formatPrepTimeHours(prepTime) {
	let hours = Math.floor(parseInt(prepTime) / 60);

	if(isNaN(hours)) {
		return "";
	}
	else if(hours === 0) {
		return "";
	} else if(hours === 1) {
		return `${hours} hour`;
	} else {
		return `${hours} hours`;
	}
}

function formatPrepTimeMinutes(prepTime) {
	let minutes = parseInt(prepTime) % 60;

	if(isNaN(minutes)) {
		return "";
	} else if(minutes === 0) {
		return "";
	} else if(minutes === 1) {
		return `${minutes} minute`;
	} else {
		return `${minutes} minutes`;
	}
}

function formatPrepTime(prepTime) {
	return `${formatPrepTimeHours(prepTime)} ${formatPrepTimeMinutes(prepTime)}`;
}

function formatLastUsed(lastUsed) {
	const date = moment(lastUsed);

	if(lastUsed && date.isValid()) {
		return date.format("MMM Do, YYYY");
	} else {
		return "never used";
	}
}



const MealCard = observer(function(props) {

	return (
		<div className="mealCard card">
			<div className="row infoRow">
				<div className="col-xs-4 text-center">
					<div className="mealStat card-block">
						<h3 className="name">{props.meal.name}</h3>
					</div>
				</div>

				<div className="col-xs-4 center-block">
					<div className="mealStat card-block">
						<span><strong>Prep Time:</strong> { formatPrepTime(props.meal.prepTime) } </span>
						<br/>
						<span><strong>Last Used:</strong> { formatLastUsed(props.meal.lastUsed) }</span>
					</div>
				</div>

				<div className="col-xs-4 text-center">
					<div className="mealStat card-block">
						<button type="button" className="btn btn-primary"
						onClick={ props.meal.useMeal }>Use it!
					</button>
				</div>
			</div>
		</div>
	</div>
	)
});

export default MealCard;