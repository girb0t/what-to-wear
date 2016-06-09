import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { updateLocationAndOneDayForecast } from '../actions/index';
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
    // redirect to one-day-forecast page
    this.props.updateLocationAndOneDayForecast(location);
    this.context.router.push('/one-day-forecast');
  }
}

export default connect(null, { updateLocationAndOneDayForecast })(LocationForm)
