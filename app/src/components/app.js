import React, { Component } from 'react';

require('../stylesheets/modules/app.scss');

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>What To Wear</h1>
        {this.props.children}
      </div>
    );
  }
}
