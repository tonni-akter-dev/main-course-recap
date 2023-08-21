import React from "react";
import { Link } from "react-router-dom";
import './index.css'
const Header = () => {
  return (
    <div>
      <Link className="nav" to="/">Home</Link>
      <Link className="nav" to="/login">Login</Link>
    </div>
  );
};

export default Header;
