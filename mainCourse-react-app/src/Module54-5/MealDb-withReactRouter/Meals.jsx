import React from "react";
import { useLoaderData } from "react-router-dom";
import SearchMeal from "./SearchMeal";
import Meal from "./Meal";
const Meals = () => {
  const meals = useLoaderData();
  let meal = meals.meals;
  //   console.log(meal);
  function mealData() {
    meal.map((meal) => {
      return meal;
    });
  }

  return (
    <div className="mt-8 ">
      <SearchMeal className="mb-5"/>
      
      <div className="grid grid-cols-3 gap-4 mt-5">
        {meal.map((meal) => (
          <Meal meal={meal} key={meal.idMeal} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
