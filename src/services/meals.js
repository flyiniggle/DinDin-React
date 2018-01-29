const MealService = {
  async get() {
    return await fetch("http://localhost:3090/meals", {
      method: "GET",
      headers: new Headers({
        'Content-Type': 'text/plain'
      })})
      .then((response) => response.json())
      .catch(err => console.log(`Error: ${err}`));

  },
  async post(meals) {
    return await fetch("http://localhost:3090/meals", {
      method: "POST",
      body: JSON.stringify(meals),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .catch(err => console.log(`Error: ${err}`));
  }
};


export default MealService
