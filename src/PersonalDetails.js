import React, { Component } from 'react';
import './PersonalDetails.css';
import './lib/Api.js';
import ApiClient from './lib/Api.js';

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      api: new ApiClient(),
      personalDetails: {}
    };
  }

  componentDidMount() {
    this.myDetails();
  }

  render() {
    return (
      <div>
        <h2>{this.state.personalDetails.name} {this.state.personalDetails.surname}</h2>
      </div>
    );
  }

  myDetails() {
    this.setState({
      personalDetails: this.state.api.getPersonalDetails()
    });
  }
}

export default PersonalDetails;
