import React from "react";
import { connect } from "react-redux";
import Userposts from "./Userposts";

const Profile = (props) => {
  const { auth, profile } = props;
  return (
    <div className="center">
      <h5>Hi {profile.firstName}!</h5>
      <Userposts />
      <a href="">
        <h5>Comments</h5>
      </a>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("state is:", state);
  const posts = state.firestore.data.posts ? state.firestore.data.posts : null;
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(Profile);
