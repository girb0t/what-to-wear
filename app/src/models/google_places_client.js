const request = require('request');
const rp = require('request-promise');
const config = require('../../../config');

const apiToken = config.tokens.googlePlaceAutocomplete;
const host = 'https://maps.googleapis.com/maps/api/place';

module.exports = {
  autocompletePromise: function(searchTerm) {
    const options = {
      method: 'GET',
      url: host + '/autocomplete/json',
      qs: { key: apiToken, input: searchTerm, types: 'geocode' },
      json: true
    }

    return rp(options);
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
