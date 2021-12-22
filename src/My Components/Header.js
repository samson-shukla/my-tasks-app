import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/About">About</Link>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    )
}


// The following code is used for type checking
Header.defaultProps = {
  title: "Default Title Here"
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}