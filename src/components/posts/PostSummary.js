import React from "react";
import { Link } from "react-router-dom";

const PostSummary = ({ post }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content">
        <Link to={"/postdetail/" + post.id}>
          <span className="card-title">{post.title}</span>
        </Link>
        <p>Posted By Pludo</p>
        <p>May, 4, 2020</p>
      </div>
    </div>
  );
};

export default PostSummary;
