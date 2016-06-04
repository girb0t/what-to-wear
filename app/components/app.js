import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    const locationInCookie = false; //STUB
    if (locationInCookie) {
      // redirect to one day forecast
      this.context.router.push('/one-day-forecast');
    } else {
      // redirect to location form
      this.context.router.push('/location');
    }
  }

  render() {
    return (
      <div>
        <h1>What To Wear</h1>
        {this.props.children}
      </div>
    );
  }
}
