const request = require('request');
const config = require('./config');
const GooglePlacesClient = require('./app/src/models/google_places_client');
const OpenWeatherMapClient = require('./app/src/models/open_weather_map_client');

module.exports = function(app, express) {
  //allow static files (CSS/JS files) to be served
  app.use(express.static('app'));

  // route format: '/:var(route1|route2)?'
  app.get('/:var(current-weather)?', function(req, res) {
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

  app.get('/current-weather-data', function(req, res) {
    // TODO: figure out how to make both API calls without nesting

    const onLocationSuccess = function(location) {
      const onWeatherSuccess = function(currentWeather) {
        res.json({ currentWeather })
      }

      const onWeatherError = function(error) {
        console.log(error);
      }

      OpenWeatherMapClient.current(location.lng, location.lat, onWeatherError, onWeatherSuccess);
    };

    const onLocationError = function(error) {
      console.log(error);
    };

    GooglePlacesClient.details(req.query.placeId, onLocationError, onLocationSuccess);
  });
};
