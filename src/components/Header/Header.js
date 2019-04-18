import React from 'react';

import './Header.css';

export default function Header(props) {
  const Link = props.link;
  return (
    <nav className="navbar navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            <h2>JDSB</h2>
          </a>
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <i className="icon-Align-Right icon icon--lg nav-button-icon text-center" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                Upcoming Events
                <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">COMING SOON!</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
