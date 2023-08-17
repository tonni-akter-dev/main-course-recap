import React from "react";
import "./Posts.css";
import { Link, useNavigate } from "react-router-dom";
const Post = ({ post }) => {
  console.log(post);
  const { title, id } = post;
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="post_design">
      <h2>{id}</h2>
      <h6>{title}</h6>
      <p>
        <Link to={`/post/${id}`}>Show me the details</Link>
      </p>
      <Link to={`/post/${id}`}>
        <button>Show me the details</button>
      </Link>
      <button onClick={handleDetails}>With Button handler</button>
    </div>
  );
};

export default Post;
