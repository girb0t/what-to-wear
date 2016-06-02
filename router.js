module.exports = function(app) {
  app.get('/', function(req, res) {
    // res.send({ hello: 'world' });
    res.sendFile(__dirname + "/app/index.html");
  });
};
