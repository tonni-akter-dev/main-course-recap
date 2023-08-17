import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      {/* we can use spinner */}
      <div>{navigation.state === "loading" ? "Loading..." : ""}</div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
