function compareTimesUsed(mealA, mealB) {
  const mealAUses = mealA.usedCount || 0;
  const mealBUses = mealB.usedCount || 0;

  return mealBUses - mealAUses;
}

function sortMostUsed(meals) {
  return Array.from(meals).sort(compareTimesUsed);
}

function compareLastUsed(mealA, mealB) {
  const mealADate = mealA.lastUsed || 0;
  const mealBDate = mealB.lastUsed || 0;

  return mealBDate - mealADate;
}

function sortRecentlyPrepared(meals = []) {
  return Array.from(meals).sort(compareLastUsed);
}

function compareId(mealA, mealB) {
  const mealAId = mealA.id || 0;
  const mealBId = mealB.id || 0;

  return mealBId - mealAId;
}

function sortById(meals = []) {
  return Array.from(meals).sort(compareId)
}

export {
  sortMostUsed,
  sortRecentlyPrepared,
  sortById
}
