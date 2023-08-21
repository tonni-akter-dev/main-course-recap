import React from "react";
import "./AmazonNav.css";
import { Link } from "react-router-dom";
const AmazonNav = () => {
  return (
    <div className="nav_bg">
      <img className="logo" src="/images/Logo.svg" alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default AmazonNav;
