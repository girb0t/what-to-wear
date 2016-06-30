import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import CurrentWeather from './containers/current_weather';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CurrentWeather} />
    <Route path="current-weather" component={CurrentWeather} />
  </Route>
);
