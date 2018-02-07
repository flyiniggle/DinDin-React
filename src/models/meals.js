import { types, getRoot } from "mobx-state-tree";
import { evolve, map } from 'ramda';

import { mealMatchesId } from "@/business/editing";


const normalizeMeal = evolve({
	taste: parseInt,
	difficulty: parseInt
});

const Meal = types.model("Meal", {
	id: types.identifier(types.number),
	name: types.string,
	prepTime: types.maybe(types.number),
	taste: types.maybe(types.number),
	difficulty: types.maybe(types.number),
	lastUsed: types.maybe(types.number),
	usedCount: types.maybe(types.number)
}).actions(function(self) {
	return {
		markUsed() {
			self.lastUsed = Date.now();
			self.usedCount = (self.usedCount) ? (self.usedCount + 1) : 1;
		}
	}
});

const MealList = types.model("MealStore", {
	mealsList: types.array(Meal)
}).actions((self) => {
	return {
		markAsUsed(id) {
			self.mealsList.find(mealMatchesId(id)).use();
		},
		add(data) {
			data.id = self.mealsList.length;

			const newMeal = normalizeMeal(data);

			self.mealsList.push(newMeal)
		},
		load: function(data) {
			self.mealsList = map(normalizeMeal, data);
		}.bind(this)
	}
});

export default MealList;