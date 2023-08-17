import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { title, body, id, userId } = post;
  //   console.log(post);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <h4>{title}</h4>
      <h4>{id}</h4>
      <p>{body}</p>
      <button onClick={handleBack}>Go Back</button>
    </>
  );
};

export default PostDetails;
