import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Sidebar from "./Sidebar";
const Home = () => {
  const userData=useLoaderData()
  return (
    <div>
      <Sidebar userData={userData}/>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
