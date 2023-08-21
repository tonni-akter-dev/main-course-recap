import React from "react";
import { Link } from "react-router-dom";
import './common.css'
const Header56 = () => {
  return (
    <div className="header_Link">
      <Link to="/">Home</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/posts">Review</Link>
      <Link to="/grandpa">Grandpa</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Header56;
