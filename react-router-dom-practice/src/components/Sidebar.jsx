import React from "react";
import "../../src/index.css";
import { Link } from "react-router-dom";
import UserDetails from "./UserDetails";
const Sidebar = ({ userData }) => {
  console.log(userData);
  return (
    <div className="detail">
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div className="input_fieldDesign">
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              className="input_field"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit" className="btn">
              New
            </button>
          </form>
        </div>
        <nav>
          <ul>
            {userData.map((name) => (
              <Link className="link_design" to={`/user/${name.id}`}>
                {name.name}
              </Link>
            ))}
            <br />
          </ul>
        </nav>
      </div>
      <div id="detail">
        <UserDetails />
      </div>
    </div>
  );
};

export default Sidebar;
