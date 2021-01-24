import React from 'react';
import '.././styles/App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube, faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {

    render (){
        return (
        <footer>
          <h3>Reach Us</h3>
     <a href="https://www.facebook.com" className="facebook">
       <FontAwesomeIcon icon={faFacebook} size="2x"/>
     </a>

     <a href="https://www.Twitter.com" className="facebook">
       <FontAwesomeIcon icon={faTwitter} size="2x"/>
     </a>
        </footer>
        )
    }
}

export default Footer;
