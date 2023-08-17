import React from "react";
import "./ActiveLink.css";
import { NavLink } from "react-bootstrap";
const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
