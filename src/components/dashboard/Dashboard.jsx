import React from "react";
import PostList from "../posts/PostList.jsx";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Parallax from "../layout/Parallax.jsx";
import Canvas from "../canvas/Canvas.jsx";
import Today from "./Today.jsx";

const Dashboard = (props) => {
  const { posts, notifications } = props;
  const filteredPosts = posts ? posts.filter((post) => post.authorized) : posts;

  return (
    <div className="dashboard">
      <Canvas />
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <PostList posts={filteredPosts} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Today />
          </div>
        </div>
      </div>
      <Parallax />
      <Today />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.firestore.ordered.posts,
    notifications: state.firestore.ordered.notifications,
    state: state,
  };
};
export default compose(
  firestoreConnect(() => [
    { collection: "posts", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3 },
  ]),
  connect(mapStateToProps)
)(Dashboard);
