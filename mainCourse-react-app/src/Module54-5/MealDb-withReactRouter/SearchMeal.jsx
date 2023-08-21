import React, { useState } from "react";
import "./Meal.css";
const SearchMeal = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    console.log(searchText);
  };
  const handleOnchange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <input
        className="searchBar"
        type="text"
        onChange={handleOnchange}
        placeholder="Search your desire dish"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchMeal;
