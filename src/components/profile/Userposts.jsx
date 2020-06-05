import React from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { connect } from "react-redux";
import PostList from "../posts/PostList.jsx";

const UserPosts = (props) => {
  const { auth, profile, posts } = props;
  console.log(posts);
  if (posts) {
    return (
      <div className="center">
        <h5>My Posts</h5>
        <PostList posts={posts} />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};
const mapStateToProps = (state) => {
  console.log("state is:", state);
  const posts = state.firestore.data.posts ? state.firestore.data.posts : null;
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    posts: posts,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ["posts"])
)(UserPosts);
