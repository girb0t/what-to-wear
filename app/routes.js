import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import OneDayForecast from './containers/one_day_forecast';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={OneDayForecast} />
  </Route>
);
