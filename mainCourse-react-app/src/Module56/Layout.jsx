import React from "react";
import Header56 from "./Header56";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header56 />
      <Outlet />
    </div>
  );
};

export default Layout;
