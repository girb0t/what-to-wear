const request = require('request');
const config = require('../../../config');

const apiToken = config.tokens.googlePlaceAutocomplete;
const host = 'https://maps.googleapis.com/maps/api/place';

module.exports = {
  autocomplete: function(searchTerm, onError, onSuccess) {
    request({
      method: 'GET',
      url: host + '/autocomplete/json',
      qs: { key: apiToken, input: searchTerm, types: 'geocode' }
    }, function(error, response, body) {
      if(error) {
        onError(error)
      } else {
        const suggestions = JSON.parse(body).predictions;
        onSuccess(suggestions);
      }
    });
  },

  details: function(placeId, onError, onSuccess) {
    request({
      method: 'GET',
      url: host + '/details/json',
      qs: { key: apiToken, placeid: placeId }
    }, function(error, response, body) {
      if (error) {
        onError(error);
      } else {
        onSuccess(JSON.parse(body).result.geometry.location);
      }
    })
  }
}
