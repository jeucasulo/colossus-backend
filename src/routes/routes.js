const BraintreeRoute = require('./BraintreeRoute');


module.exports = (app) => {

  app.get('/', function (req, res) {
    // res.send(`Server running at http://${hostname}:${port}/`);
    res.json({ msg: 'Server Online' });
  });


  BraintreeRoute(app)
}
