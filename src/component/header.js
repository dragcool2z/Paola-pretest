import React, { Component } from 'react';
export default class header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <header id="header">
        <div>
          <hr className="hr"></hr>
          <nav className="navbar sticky-top navbar-expand-lg">
          <div className="rachel">
          <a className="navbar-brand nav-link disabled" href="#">Rachel Smith</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">ABOUT</a>
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