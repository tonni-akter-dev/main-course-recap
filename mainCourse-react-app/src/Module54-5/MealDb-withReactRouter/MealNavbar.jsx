import React from "react";
import { Link, Outlet } from "react-router-dom";

const MealNavbar = () => {
  return (
    <div>
      {/* <h1 className=" font-bold underline">
      Hello world!
    </h1> */}
      <Link to="/">Home</Link>
      <Link to="/meals">Meals</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <Outlet></Outlet>
    </div>
  );
};

export default MealNavbar;
