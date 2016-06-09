import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class OneDayForecast extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    const locationInCookie = false; //STUB
    if (!locationInCookie && _.isEmpty(this.props.location)) {
      this.context.router.push('/location');
    } else if (locationInCookie) {
    }
  }

  render() {
    return (
      <div>
        <h2>One Day Forecast</h2>
        <p>{this.props.location.description}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.forecastState.location,
    oneDayForecast: state.forecastState.oneDayForecast
  };
}

export default connect(mapStateToProps, null)(OneDayForecast)
