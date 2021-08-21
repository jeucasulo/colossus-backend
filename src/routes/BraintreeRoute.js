
const BraintreeController = require('../controllers/BraintreeController');
module.exports = (app) => {
  app.post('/usuario', BraintreeController.post);
  app.put('/usuario/:id', BraintreeController.put);
  app.delete('/usuario/:id', BraintreeController.delete);
  app.get('/usuarios', BraintreeController.get);
  app.get('/usuario/:id', BraintreeController.getById);
}
