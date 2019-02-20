import React from "react";

import { Link } from "react-router-dom";
export default class Navbar extends React.Component {
  render() {
    return (
      <nav
        className=" nav navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0"
        style={{ height: "50px" }}
      >
        <a href="/" className="navbar-brand mx-auto">
          E-Commerce
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-3">
            <Link to="/" className="nav-link">
              <i className="fas fa-home" /> HOME
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/about" className="nav-link">
              <i className="fas fa-question" /> ABOUT
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/cart" className="nav-link">
              <i className="fas fa-shopping-cart" />
              CART
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/login" className="nav-link">
              <i className="fas fa-sign-in-alt" /> Login
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
