import React from "react";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper transparent">
      <div className="container">
        <a href="/" className="brand-logo">
          Pludose
        </a>
        <SignedOutLinks />
        <SignedInLinks />
      </div>
    </nav>
  );
};
export default Navbar;
