import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
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
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          PD
        </NavLink>
      </li>
    </ul>
  );
};
export default SignedInLinks;
