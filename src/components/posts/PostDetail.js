import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const PostDetail = (props) => {
  const { post } = props;
  if (post) {
    return (
      <div className="container section post-detail">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <p>{post.content}</p>
          </div>
          <div className="card-action gray">
            Posted by {post.authorfirstname} {post.authorlastname}{" "}
          </div>
          <div>
            <p>Posted at {post.createdAt.toDate().toString()}} </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="center">
        <p>Loading Post...</p>
      </div>
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ["posts"])
)(PostDetail);
