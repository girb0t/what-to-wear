const request = require('request');
const config = require('./config');
const GooglePlacesClient = require('./app/src/models/google_places_client');

module.exports = function(app, express) {
  //allow static files (CSS/JS files) to be served
  app.use(express.static('app'));

  app.get('/:var(location|one-day-forecast)?', function(req, res) {
    res.sendFile(__dirname + "/app/index.html");
  });

  app.get('/location-suggestions', function(req, res) {
    // TODO: move to controller

    const onSuccess = function(suggestions) {
      res.json({ suggestions });
    };

    const onError = function(error) {
      console.log(error);
    };

    GooglePlacesClient.autocomplete(req.query.searchTerm, onError, onSuccess);
  });

  app.get('/one-day-forecast-data', function(req, res) {
    const apiToken = config.tokens.googlePlaceAutocomplete;

    var myRequest = request({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/place/details/json',
      qs: { key: apiToken, placeid: req.query.placeId }
    }, function(error, response, body) {
      if (error) {
        console.log(error);
      } else {
        const longitude = JSON.parse(body).result.geometry.location.lng;
        const latitude= JSON.parse(body).result.geometry.location.lat;


      }
    })


  });
};
