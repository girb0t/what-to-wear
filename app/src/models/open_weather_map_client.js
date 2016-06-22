const request = require('request');
const qs = require('querystring');
const config = require('../../../config');

const apiToken = config.tokens.openWeatherMap
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';

module.exports = {
  current: function(long, lat, onError, onSuccess) {
    request({
      method: 'GET',
      url: baseUrl,
      qs: { appid: apiToken, lon: long, lat: lat }
    }, function(error, response, body) {
      if (error) {
        onError(error);
      } else {
        onSuccess(JSON.parse(body));
      }
    })
  }
};
