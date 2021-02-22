import React from 'react';
import axios from 'axios';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import './Contact.css';
import Title from '.././Title';

class Contact extends React.Component {
  constructor() {
    super()
    this.state = { email: '' }

  }

  render() {
    const mapStyles = {
      width: '300px',
      height: '470px',
      top: '-480px',
      left: '850px',
    };

    return (
      <div>
        <Title title="Contact Us!" />
        <div className="contactForm">
          <form onSubmit={this.submitEmail.bind(this)} method="POST">
            <label>
              Email:
                  <input type="text" name="email" className="email" required value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </label>
            <label>
              Subject:
                  <textarea type="text" name="subject" className="subject" />
            </label>
            <input type="submit" value="Submit" />

          </form>
          <Map google={this.props.google} style={mapStyles}
            initialCenter={{ lat: 40.854885, lng: -88.081807, }}
            zoom={15}
            onClick={this.onMapClicked} />

        </div>
      </div>

    )
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value })
  }

  submitEmail(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3000/contact",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
  resetForm() {
    this.setState({ email: '', subject: '' })
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyDu_08IBT9_DjjxrvyNWxBKLivUFx-grIY')
})(Contact);
