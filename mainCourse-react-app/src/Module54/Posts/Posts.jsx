import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import './Posts.css'
const Posts = () => {
  const posts = useLoaderData();
  return (
    <>
        <h1>All Posts is here</h1>
      <div className="flexing">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Posts;
