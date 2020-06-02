import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { convertFromRaw } from "draft-js";
import moment from "moment";
import PostContent from "./PostContent";
import CommentBox from "../comments/CommentBox";
import Comments from "../comments/Comments";

const PostDetail = (props) => {
  const { post, postId } = props;
  if (post) {
    return (
      <div className="container section post-detail">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <PostContent post={post} />
          </div>
          <div className="card-action gray">
            Posted by {post.authorfirstname} {post.authorlastname}{" "}
          </div>
          <div>
            <p>Posted at {moment(post.createdAt.toDate()).calendar()} </p>
          </div>
        </div>
        <CommentBox postId={postId} />
        <Comments postId={postId} />
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
    postId: id,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ["posts"])
)(PostDetail);
