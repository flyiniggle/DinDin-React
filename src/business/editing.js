import {addIndex, assoc, curry, evolve, inc, has, map, omit, pipe, when} from "ramda";


const mapWithIndex = addIndex(map);

/*
Utilities for identifying meals and removing IDs before saving,
cause that's just how i'm doing it for now.
*/
const identifyMeal = (meal, id) => Object.assign({id}, meal);

const identifyMealsList = mapWithIndex(identifyMeal);

const unIdentifyMeal = omit(["id"]);

const unIdentifyMealsList = map(unIdentifyMeal);

const mealMatchesId = curry((id, meal) => meal.id === id);


const useMeal = pipe(
  assoc("lastUsed", Date.now()),
  when((meal) => !has("usedCount", meal), assoc("usedCount", 0)),
  evolve({ usedCount: inc })
);

const findAndUseMeal = function(id, meals) {
  let useMealWhenIdMatches = when(mealMatchesId(id), useMeal);

  return map(useMealWhenIdMatches, meals);
};

const updateMeal = curry((changes, meal) => Object.assign(meal, changes));

export {
  identifyMeal,
  identifyMealsList,
  unIdentifyMeal,
  unIdentifyMealsList,
  mealMatchesId,
  useMeal,
  findAndUseMeal,
  updateMeal
};
