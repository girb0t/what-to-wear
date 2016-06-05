import React, { Component } from 'react';
import LocationSearchBar from '../components/location_search_bar';

class LocationForm extends Component {
  constructor() {
    super();
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
