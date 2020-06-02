import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const PostSummary = ({ post }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content">
        <Link to={"/postdetail/" + post.id}>
          <span className="card-title">{post.title}</span>
        </Link>
        <p>Posted By {post.authorFirstName} </p>
        <p>{moment(post.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
};

export default PostSummary;
