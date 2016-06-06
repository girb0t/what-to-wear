import React, { Component } from 'react';
import LocationSearchBar from '../components/location_search';
import axios from 'axios';

require('../stylesheets/modules/location_form.scss');

class LocationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='page-container'>
        <LocationSearchBar onLocationSelected={this.onLocationSelected} />
      </div>
    );
  }

  onLocationSelected(location) {
    console.log(`Selected: ${location}`)
  }
}

export default LocationForm;
