import React from 'react';
import PropTypes from 'prop-types';


export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
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