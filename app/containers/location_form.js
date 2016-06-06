import React, { Component } from 'react';
import LocationSearchBar from '../components/location_search_bar';
import axios from 'axios';

class LocationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LocationSearchBar onLocationSelected={this.onLocationSelected} />
      </div>
    );
  }

  onLocationSelected(location) {
    console.log(`Selected: ${location}`)
  }
}

export default LocationForm;
