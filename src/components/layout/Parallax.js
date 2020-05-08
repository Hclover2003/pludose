import React, { useState, useEffect } from "react";
import M from "materialize-css";

const Parallax = () => {
  useEffect(() => {
    let elements = document.querySelectorAll(".parallax");
    M.Parallax.init(elements);
  }, []);
  return (
    <div className="parallax-container">
      <div className="parallax">
        <img
          src="https://images.unsplash.com/photo-1542080255-e564af7ae266?ixlib=rb-1.2.1&auto=format&fit=crop&w=1584&q=80"
          alt="parallax-1"
        />
      </div>
    </div>
  );
};
export default Parallax;
