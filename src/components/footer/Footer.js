import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer indigo lighten-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5>Pludose</h5>
            <p></p>
          </div>
          <div className="col l4 s12">
            <h5>Links</h5>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Create an account</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">&copy</div>
      </div>
    </footer>
  );
};

export default Footer;
