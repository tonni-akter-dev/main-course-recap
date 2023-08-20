import React from "react";
import { useLoaderData } from "react-router-dom";
import SearchMeal from "./SearchMeal";
import Meal from "./Meal";
const Meals = () => {
  const meals = useLoaderData();
  let meal = meals.categories;
  //   console.log(meal);
  return (
    <div className="mt-8">
      <SearchMeal />
      {meal.map((meal) => (
        <Meal meal={meal} key={meal.idCategory} />
      ))}
    </div>
  );
};

export default Meals;
