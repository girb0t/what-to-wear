import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import LocationForm from './containers/location_form';
import CurrentWeather from './containers/current_weather';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CurrentWeather} />
    <Route path="location" component={LocationForm} />
    <Route path="current-weather" component={CurrentWeather} />
  </Route>
);
