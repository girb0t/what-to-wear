const request = require('request')
const config = require('./config')

module.exports = function(app, express) {
  //allow static files (CSS/JS files) to be served
  app.use(express.static('app'));

  app.get('/:var(location|one-day-forecast)?', function(req, res) {
    res.sendFile(__dirname + "/app/index.html");
  });

  app.get('/location-suggestions', function(req, res) {
    // TODO: move to controller and create Google API client
    const apiToken = config.tokens.googlePlaceAutocomplete;

    request({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json',
      qs: { key: apiToken, input: req.query.searchTerm, types: 'geocode' }
    }, function(error, response, body) {
      if(error) {
        console.log(error);
      } else {
        const suggestions = JSON.parse(body).predictions;
        res.json({
          suggestions
        });
      }
    });
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
