import React, { Component } from 'react';
import '/src/App.css';
export default class header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <header id="header">
        <div>
          <hr className="hr">
          <nav className="navbar fixed-top sticky-top navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Rachel Smith</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">ABOUT<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">RESUME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#nav-tabContent">EDUCATION</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#nav-tabContent">PORTOFOLIO</a>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      </header>
      </React.Fragment>
    );
  }
}