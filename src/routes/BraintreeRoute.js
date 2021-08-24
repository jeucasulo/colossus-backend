// https://developer.paypal.com/braintree/docs/start/hello-server/node
// https://runkit.com/pedrinho/611c1621cce7e0001a121bb7

const BraintreeController = require('../controllers/BraintreeController');


module.exports = (app) => {
  app.get('/get-connect-url', (BraintreeController.getConnectUrl));
  app.get('/get-access-token', (BraintreeController.getAccessToken));
  app.get('/get-code', (BraintreeController.getCode));
  app.get('/get-code-from-db', (BraintreeController.getCodeFromDb));
  app.get('/transaction', (BraintreeController.transaction));


  app.post('/usuario', BraintreeController.post);
  app.put('/usuario/:id', BraintreeController.put);
  app.delete('/usuario/:id', BraintreeController.delete);
  app.get('/usuarios', BraintreeController.get);
  app.get('/usuario/:id', BraintreeController.getById);
}

