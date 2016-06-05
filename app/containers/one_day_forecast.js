import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchDeviceLocation } from '../actions/index';
import { Link } from 'react-router';

class OneDayForecast extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    const locationInCookie = false; //STUB
    if (!locationInCookie) {
      // redirect to location form
      this.context.router.push('/location');
    }
    // this.props.fetchDeviceLocation();
  }

  render() {
    return (
      <div>
        <h2>One Day Forecast</h2>
        <p>{this.props.location.zipCode}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { location: state.location };
}

export default connect(mapStateToProps, { fetchDeviceLocation })(OneDayForecast)
