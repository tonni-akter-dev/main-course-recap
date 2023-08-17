import React from "react";
import "./AmazonNav.css";
const AmazonNav = () => {
  return (
    <div className="nav_bg">
      <img className="logo" src="/images/Logo.svg" alt="" />
      <div>
        <a href="/shop">Shop</a>
        <a href="/order">Order</a>
        <a href="/inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default AmazonNav;
