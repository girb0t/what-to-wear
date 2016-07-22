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
    };

    return rp(options);
  },

  detailsPromise: function(placeId, onError, onSuccess) {
    const options = {
      method: 'GET',
      url: host + '/details/json',
      qs: { key: apiToken, placeid: placeId },
      json: true
    };

    return rp(options);
  }
}
