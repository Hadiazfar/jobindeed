import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../navbar/Navbar.css";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  nav1">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <img src="images/logo.svg" className="logo" />
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
            </ul>

            <form className="d-flex">
              <p className="mytext">
                {props.name}
                <Link to={props.location} className="text2">
                  {" "}
                  {props.etet}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
