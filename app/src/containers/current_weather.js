import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getCurrentWeather, setLocation } from '../actions/index';
import LocationSearchBar from '../components/location_search';

require('../stylesheets/modules/current_weather.scss');

class CurrentWeather extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.onLocationSelected = this.onLocationSelected.bind(this);
  }

  render() {
    const description = this.props.currentWeather.weather ? this.props.currentWeather.weather[0].description : '';
    let header;
    let content;

    if (this.locationUnavailable()) {
      content = (
        <div id='location-search-container'>
          <LocationSearchBar onLocationSelected={this.onLocationSelected} />
        </div>
      );
    } else {
      content = (
        <div>
          <p>{this.props.location.description}</p>
          <p>{description}</p>
        </div>
      );
    }

    return (
      <div>
        <h2>Current Weather</h2>
        { content }
      </div>
    );
  }

  locationUnavailable() {
    const locationInCookie = false; //STUB
    return !locationInCookie && _.isEmpty(this.props.location)
  }

  onLocationSelected(location) {
    // update app state with new location
    // make server call for weather information and update state with weather information
    // redirect to current-weather page
    this.props.setLocation(location);
    this.props.getCurrentWeather(location);
  }
}

function mapStateToProps(state) {
  return {
    location: state.forecastState.location,
    currentWeather: state.forecastState.currentWeather
  };
}

export default connect(mapStateToProps, { getCurrentWeather, setLocation })(CurrentWeather)
