import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";
const Friend = ({ friend }) => {
  // console.log(friend);
  return (
    <div className="divFriend">
      <h4>{friend.name}</h4>
      <p>Email: {friend.email}</p>
      <p>Phone: {friend.phone}</p>
      <p>
        <Link to={`/friends/${friend.id}`}>Show me details</Link>
      </p>
    </div>
  );
};

export default Friend;
