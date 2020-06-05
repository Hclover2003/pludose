import React, { useEffect } from "react";
import M from "materialize-css";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const SignedInLinks = (props) => {
  const { profile } = props;
  useEffect(() => {
    let elements = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elements);
  }, []);
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
        <a className="dropdown-trigger btn" data-target="dropdown1">
          {profile.initials}
        </a>
      </li>
      <ul id="dropdown1" class="dropdown-content">
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li class="divider" tabindex="-1"></li>
        <li>
          <a href="#!">Settings</a>
        </li>
        <li class="divider" tabindex="-1"></li>

        <li>
          <a onClick={props.signOut}>Log Out</a>
        </li>
      </ul>
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
