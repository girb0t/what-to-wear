import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getCurrentWeather } from '../actions/index';
import LocationSearchBar from '../components/location_search';

require('../stylesheets/modules/location_form.scss');

class LocationForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.onLocationSelected = this.onLocationSelected.bind(this);
  }

  render() {
    return (
      <div className='page-container'>
        <LocationSearchBar onLocationSelected={this.onLocationSelected} />
      </div>
    );
  }

  onLocationSelected(location) {
    // update app state with new location
    // make server call for weather information and update state with weather information
    // redirect to current-weather page
    this.props.getCurrentWeather(location);
    this.context.router.push('/current-weather');
  }
}

export default connect(null, { getCurrentWeather })(LocationForm)
