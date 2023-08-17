import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "./Friend";

const Friends = () => {
  const data = useLoaderData();
//   console.log(data);
  return (
    <div>
      <h2>These are my friends:{data.length}</h2>
      {data.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Friends;
