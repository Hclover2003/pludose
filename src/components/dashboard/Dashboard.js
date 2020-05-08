import React, { Component } from "react";
import Notifications from "./Notifications";
import PostList from "../posts/PostList";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Dashboard = (props) => {
  const { posts } = props;

  const filteredPosts = posts ? posts.filter((post) => post.authorized) : posts;

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <PostList posts={filteredPosts} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts,
  };
};
export default compose(
  firestoreConnect(() => ["posts"]),
  connect(mapStateToProps)
)(Dashboard);
