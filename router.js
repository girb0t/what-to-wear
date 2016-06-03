module.exports = function(app, express) {
  app.get('/', function(req, res) {
    // res.send({ hello: 'world' });
    res.sendFile(__dirname + "/app/index.html");
  });

  //allow static files to be served
  app.use(express.static('app'));
};
