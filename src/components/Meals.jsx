import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [fetchedMeals, setFetchedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      const meals = await response.json();
      setFetchedMeals(meals);
    }
    fetchMeals();
  }, []);
  return (
    <ul id="meals">
      {fetchedMeals.map((meal) => (
        <MealItem {...meal} />
      ))}
    </ul>
  );
};

export default Meals;
