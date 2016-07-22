const request = require('request');
const rp = require('request-promise');
const qs = require('querystring');
const config = require('../../../config');

const apiToken = config.tokens.openWeatherMap
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';

module.exports = {
  currentWeatherPromise: function(long, lat, onError, onSuccess) {
    const options = {
      method: 'GET',
      url: baseUrl,
      qs: { appid: apiToken, lon: long, lat: lat },
      json: true
    }

    return rp(options);
  }
};
