import { pipe } from 'ramda';
import { getRoot, getSnapshot } from "mobx-state-tree";

import { identifyMealsList, unIdentifyMealsList } from '@/business/editing';
import MealsList from '@/models/meals';
import MealService from '@/services/meals';


const MealsListStore = Object.assign(
	MealsList.create({mealsList: []}),
	MealService
);

MealsListStore.init = function() {
	this.get()
		.then(identifyMealsList)
		.then(this.load)
};

MealsListStore.save = function() {
	pipe(
		unIdentifyMealsList,
		this.post
	)(getSnapshot(this.mealsList));
};

const createMealStore = function(model) {
	const MealStore = Object.assign(
		model,
		MealService
	);

	MealStore.useMeal = function() {
		this.markUsed();

		const root = getRoot(this);
		pipe(
			unIdentifyMealsList,
			this.post
		)(getSnapshot(root.mealsList));

	}.bind(MealStore);

	return MealStore;
};

export {
	MealsListStore,
	createMealStore
}