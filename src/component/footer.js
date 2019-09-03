import React, { Component } from 'react';
import SocialMediaIcons from 'react-social-media-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter,faInstagram,faLinkedin} from "@fortawesome/free-brands-svg-icons";
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <footer id="footer">
      	<div className="footer">
      		 <a href="#" className="fa fa-linkedin"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
      		 <a href="#" className="fa fa-facebook"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
      		 <a href="#" className="fa fa-instagram"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
      		 <a href="#" className="fa fa-twitter"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
      		 
      	</ div>
      </footer>
      </React.Fragment>
    );
  }
}