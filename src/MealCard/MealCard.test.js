import React from "react";
import { shallow } from "enzyme";

import MealCard from "./MealCard";

describe("#MealCard", function() {
	it("should show the meal name", function() {
		const wrapper = shallow(<MealCard meal={{name: "coffee"}}/>);

		expect(wrapper.find('.name').text()).toEqual("coffee");
	});
});