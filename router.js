module.exports = function(app, express) {
  //allow static files (CSS/JS files) to be served
  app.use(express.static('app'));

  app.get('/:var(location|one-day-forecast)?', function(req, res) {
    // res.send({ hello: 'world' });
    res.sendFile(__dirname + "/app/index.html");
  });

  app.get('/location-suggestions', function(req, res) {
    const locations = [
      {
        description: 'New York, NY, USA'
      },
      {
        description: 'Boston, MA, USA'
      },
      {
        description: 'Oakland, CA, USA'
      },
      {
        description: 'Kiev, Ukraine'
      }
    ];

    res.json({
      locations
    })
  });
};
