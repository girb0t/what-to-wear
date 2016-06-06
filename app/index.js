import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';

import routes from './src/routes';
import reducers from './src/reducers';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

const store = createStore(state => state); // PLACEHOLDER

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container')
);
