import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const branding = props.branding;
  return (
    <nav
      className=" nav navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0"
      style={{ height: "50px" }}
    >
      <a href="/" className="navbar-brand mx-auto">
        {branding}
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mx-3">
          <i className="fas fa-home" /> HOME
        </li>
        <li className="nav-item mx-3">
          <i className="fas fa-question" /> ABOUT
        </li>
        <li className="nav-item mx-3">
          <i className="fas fa-shopping-cart" /> CART
        </li>
        <li className="nav-item mx-3">
          <i className="fas fa-sign-in-alt" /> Login
        </li>
      </ul>
    </nav>
  );
}

Navbar.defaultProps = {
  branding: "E-Commerce"
};

Navbar.propTypes = {
  branding: PropTypes.string.isRequired
};
