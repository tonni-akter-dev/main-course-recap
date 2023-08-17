import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  console.log(friend);
  return (
    <div>
      <h2>FriendDetails </h2>
      <h4>Name: {friend.name}</h4>
      <h4>Name: {friend.phone}</h4>
    </div>
  );
};

export default FriendDetails;
