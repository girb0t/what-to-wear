

import jsdom from 'jsdom';
import jquery from 'jquery'; //can't use '$' b/c then it'll try to find actual DOM. Below, we assign $ to fake DOM.
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import reducers from '../src/reducers';
const store = createStore(state => state); // TEMPORARY HACK. Should uncomment line above instead.
import chaiJquery from 'chai-jquery';


//##########
// Set up testing env to run like a browser in the command line
//##########

// initialize and set up our fake browser for use inside of commandline
// when using jsdom, 'global' is the same as 'window' in the browser
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView; // what's going on here?

// tells jquery "don't do you thang and reach out and find the DOM"
// instead, only be responsible for the fake dom being provided by jsdom
const $ = jquery(global.window);


//##########
// Build 'renderComponent' helper that should render a given react class
//##########
function renderComponent(ComponentClass, props = {}, state={}) {
  const componentInstance = (
    // <Provider store={createStore(reducers, state)}>
    <Provider store={store}>
      <ComponentClass {...props} />
    </Provider>
  );
  const renderedComponent = TestUtils.renderIntoDocument(componentInstance);

  return $(ReactDOM.findDOMNode(renderedComponent)); // produces HTML
}


//##########
// Build helper for simulating events
//##########

// To call simulate: $('div').simulate()
$.fn.simulate = function(eventName, value) {
  // `this` refers to the HTML element that was selected
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}

//##########
// Set up chai-jquery
//##########
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
