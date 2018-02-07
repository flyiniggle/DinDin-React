import * as Editing from './editing';

describe("#editing", function() {
  describe("#identifyMeal", function() {
    it("should add an id property to an object.", function() {
      let obj = {};
      let result = Editing.identifyMeal(obj, 1);

      expect(result).toHaveProperty("id", 1);
    });

    it("should return a new object.", function() {
      let obj = {};
      let result = Editing.identifyMeal(obj, 1);

      expect(result).not.toBe(obj);
    });

    it("should not overwrite an existing id.", function() {
      let obj = {id: 2};
      let result = Editing.identifyMeal(obj, 1);

      expect(result.id).toEqual(2);
    });
  })

  describe("#identifyMealsList", function() {
    it("should add an id property to each meal in a list based on it's index.", function() {
      const start = [
        {obj: 1},
        {obj: 2},
        {obj: 3},
        {obj: 4},
        {obj: 5},
        {obj: 6},
      ];
      const expected = [
        {obj: 1, id: 0},
        {obj: 2, id: 1},
        {obj: 3, id: 2},
        {obj: 4, id: 3},
        {obj: 5, id: 4},
        {obj: 6, id: 5},
      ];
      const results = Editing.identifyMealsList(start);

      expect(results).toEqual(expected);
    });
  });

  describe("#unIdentifyMeal", function() {
    it("should remove an id property from an object.", function() {
      let obj = {id: 1};
      let result = Editing.unIdentifyMeal(obj);

      expect(result).not.toHaveProperty("id");
    });

    it("should return a new object.", function() {
      let obj = {id: 1};
      let result = Editing.unIdentifyMeal(obj);

      expect(result).not.toBe(obj);
    });

    it("should not do anything if the object has no id.", function() {
      let obj = {};
      let result = Editing.unIdentifyMeal(obj);

      expect(result).not.toHaveProperty("id");
    });
  })

  describe("#unIdentifyMealsList", function() {
    it("should remove an id property from each meal in a list.", function() {
      const expected = [
        {obj: 1},
        {obj: 2},
        {obj: 3},
        {obj: 4},
        {obj: 5},
        {obj: 6}
      ];
      const start = [
        {obj: 1, id: 0},
        {obj: 2, id: 1},
        {obj: 3, id: 2},
        {obj: 4, id: 3},
        {obj: 5, id: 4},
        {obj: 6, id: 5}
      ];
      const results = Editing.unIdentifyMealsList(start);

      expect(results).toEqual(expected);
    });
  });

  describe("#mealMatchesId", function() {
    it("should return true when the meal id matches the given id.", function() {
      const meal = {id: 1};

      expect(Editing.mealMatchesId(1, meal)).toBeTruthy();
    });

    it("should return false when the meal id doesn't match the given id.", function() {
      const meal = {id: 5};

      expect(Editing.mealMatchesId(1, meal)).toBeFalsy();
    })
  });

  describe("#useMeal", function() {
    it("should set the lastUsed property to today's date.", function() {
      const meal = {lastUsed: 0, usedCount: 0};
      const result = Editing.useMeal(meal);
      const expectedDate = new Date();
      const expectedDay = expectedDate.getDay();
      const expectedMonth = expectedDate.getMonth();
      const expectedYear = expectedDate.getFullYear();
      const resultDate = new Date(result.lastUsed);

      expect(resultDate.getDay()).toEqual(expectedDay);
      expect(resultDate.getMonth()).toEqual(expectedMonth);
      expect(resultDate.getFullYear()).toEqual(expectedYear);
    });

    it("should create a lastUsed property if none exists.", function() {
      const meal = {usedCount: 0};
      const result = Editing.useMeal(meal);
      const expectedDate = new Date();
      const expectedDay = expectedDate.getDay();
      const expectedMonth = expectedDate.getMonth();
      const expectedYear = expectedDate.getFullYear();
      const resultDate = new Date(result.lastUsed);

      expect(resultDate.getDay()).toEqual(expectedDay);
      expect(resultDate.getMonth()).toEqual(expectedMonth);
      expect(resultDate.getFullYear()).toEqual(expectedYear);
    });

    it("should increment usedCount.", function() {
      const meal = {lastUsed: 0, usedCount: 0};
      const result = Editing.useMeal(meal);

      expect(result.usedCount).toEqual(1);
    });

    it("should create a usedCount property if none exists.", function() {
      const meal = {lastUsed: 0};
      const result = Editing.useMeal(meal);

      expect(result.usedCount).toEqual(1);
    });
  });

  describe("#findAndUseMeal", function() {
    it("should mark the meal with the specified ID as used.", function() {
      const meals = [
        {id: 1, usedCount: 0},
        {id: 2, usedCount: 0},
        {id: 3, usedCount: 0},
        {id: 4, usedCount: 0},
        {id: 5, usedCount: 0},
        {id: 6, usedCount: 0},
        {id: 7, usedCount: 0},
      ];
      const results = Editing.findAndUseMeal(4, meals);
      const targetResult = results[3];
      const expectedDate = new Date();
      const expectedDay = expectedDate.getDay();
      const expectedMonth = expectedDate.getMonth();
      const expectedYear = expectedDate.getFullYear();
      const resultDate = new Date(targetResult.lastUsed);

      expect(resultDate.getDay()).toEqual(expectedDay);
      expect(resultDate.getMonth()).toEqual(expectedMonth);
      expect(resultDate.getFullYear()).toEqual(expectedYear);
      expect(targetResult.usedCount).toEqual(1)
    });
  });
});
