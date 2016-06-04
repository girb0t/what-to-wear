module.exports = function(app, express) {
  //allow static files (CSS/JS files) to be served
  app.use(express.static('app'));

  app.get('/*', function(req, res) {
    // res.send({ hello: 'world' });
    res.sendFile(__dirname + "/app/index.html");
  });
};
