import React from 'react';
import './App/App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {

  render() {
    return (
      <footer style={{clear: 'both', display: "block", position: 'relative', left: 0, bottom: 0, width: '100%', height: '15vh'}}>
        <div className="footerContent">
          <h3>Visit Us</h3>
          <p>431 Lang St</p>
          <p>L1N 4R9</p>
          <p>Toronto, Ontario, Canada</p>
        </div>
        <div className="footerContent">
          <h3>Social</h3>
          <a href="https://www.facebook.com" className="social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>

          <a href="https://www.twitter.com" className="social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>

          <a href="https://www.instagram.com" className="social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer;
