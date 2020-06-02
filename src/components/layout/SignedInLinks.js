import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const SignedInLinks = (props) => {
  const { profile } = props;
  return (
    <ul className="right">
      <li>
        <NavLink to="/todos">Todos</NavLink>
      </li>
      <li>
        <NavLink to="/submissions">Submissions</NavLink>
      </li>
      <li>
        <NavLink to="/createpost">Create Post</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
  };
};
export default connect(null, mapDispatchToProps)(SignedInLinks);
