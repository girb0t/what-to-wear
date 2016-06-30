import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class CurrentWeather extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    const description = this.props.currentWeather.weather ? this.props.currentWeather.weather[0].description : '';
    return (
      <div>
        <h2>One Day Forecast</h2>
        <p>{this.props.location.description}</p>
        <p>{description}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.forecastState.location,
    currentWeather: state.forecastState.currentWeather
  };
}

export default connect(mapStateToProps, null)(CurrentWeather)
