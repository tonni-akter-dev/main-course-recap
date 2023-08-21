import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {
  const details = useLoaderData();
  let detail = details.meals[0];
  let navigate = useNavigate();
  const handleBack = () => {
    navigate("/meals");
  };
  return (
    <div>
      <h1>Meal details here</h1>
      <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <a href="#">
          <img class="rounded-t-lg" src={detail.strMealThumb} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {detail.strMeal}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {detail.strInstructions}
          </p>
          <button
            className="border border-gray-200 rounded-lg shadow"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
