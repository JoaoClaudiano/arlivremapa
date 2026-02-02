// src/components/BlogList.js
import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px", paddingBottom: "10px" }}>
          <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
          <p>{post.content.substring(0, 120)}...</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
