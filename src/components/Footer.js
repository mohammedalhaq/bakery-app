import React from 'react';
import '.././styles/App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {

  render() {
    return (
      <footer style={{clear: 'both', position: 'relative', left: 0, bottom: 0, width: '100%', height: '12vh', marginTop: '2rem'}}>
        <div className="footerContent">
          <h3>Reach Us</h3>
          <a href="https://www.facebook.com" className="facebook">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>

          <a href="https://www.Twitter.com" className="facebook">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer;
