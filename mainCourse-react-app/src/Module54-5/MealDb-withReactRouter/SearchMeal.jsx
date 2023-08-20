import React from "react";
import './Meal.css'
const SearchMeal = () => {
  return (
    <div>
      <input className="searchBar" type="text" placeholder="Search your desire dish" />
      <button>Search</button>
    </div>
  );
};

export default SearchMeal;
