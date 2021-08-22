require('dotenv').config()

const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});


exports.getConnectUrl = (req, res, next) => {

  const url = gateway.oauth.connectUrl({
    redirectUri: "https://www.example.com/",
    scope: "shared_vault_transactions,transaction:manage_settlement",
  });
  // console.log(url);
  res.json({ url: url });
};
















exports.post = (req, res, next) => {
  res.status(201).send('Rota POST!');
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Rota PUT com ID! --> ${id}`);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Rota DELETE com ID! --> ${id}`);
};

exports.get = (req, res, next) => {
  res.status(200).send('Rota GET!');
};

exports.getById = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Rota GET com ID! ${id}`);
};