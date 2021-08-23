require('dotenv').config()
// https://stackoverflow.com/questions/54689412/how-to-access-variable-in-another-file-in-node-js
// https://docs.mongodb.com/drivers/node/usage-examples/findOne/
// https://docs.mongodb.com/drivers/node/usage-examples/count/
// https://www.youtube.com/watch?v=dbSXC7kdUmc
// https://docs.mongodb.com/drivers/node/fundamentals/crud/read-operations/cursor/
// https://usefulangle.com/post/187/nodejs-get-date-time

const { mongoConnect } = require('../../db.js');;
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











exports.getCode = (req, res, next) => {
  var code = req.query.code; // $_GET["id"]
  console.log('code');
  console.log(code);

  (async () => {
    mongoConnect();
    await client.connect(async err => {
      const collection = client.db("colossus").collection("accessToken"); // db and table
      // perform actions on the collection object
      // console.log(collection);
      collection.deleteMany();

      const result = await collection.insertOne({
        "type": "accessToken",
        "accessTokenData": code,
        "datetime": Date.now(),
        "date": new Date()
      });

      console.log(result);

      client.close();
    });
  })();

  res.json({ code: code });
};






exports.getCodeFromDb = async (req, res, next) => {

  mongoConnect();

  await client.connect(async err => {
    const collection = client.db("colossus").collection("accessToken"); // db and table

    const query = { type: "accessToken" };

    const options = {
      // sort matched documents in descending order by rating
      sort: { datetime: -1 },
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 1, accessTokenData: 1, type: 1 },
    };

    const result = await collection.findOne(query, options);
    console.log(result);

    const estimate = await collection.estimatedDocumentCount();
    // console.log(`Estimated number of documents in the collection: ${estimate}`);
    console.log(`Count: ${estimate}`);




    // const todos = await collection.find({ datetime: { $gt: 4 } })
    // console.log('todos');
    // console.log(todos);


    // const cursor = collection.find({});
    // console.log('cursor');
    // await cursor.forEach(doc => console.log(doc));

    // const cursorAsync = collection.find({});
    // console.log("async");





    // let cursorForVar = [];
    // for await (const doc of cursorAsync) {
    //   cursorForVar.push(await doc);
    //   console.log(doc);
    // }
    // console.log('cursorForVar');
    // console.log(cursorForVar);













    client.close();

    res.json({ url: result });

  });

};
















exports.getAccessToken = (req, res, next) => {

  const codeFromQueryString = "14c0c1aa50aa12841921e462858d6793"

  // https://www.example.com/?state=&merchantId=kq7t3257dqmnpjrz&code=02fe27b31cfaafa68c4253caabd95e93
  // https://www.example.com/?state=&merchantId=kq7t3257dqmnpjrz&code=14c0c1aa50aa12841921e462858d6793

  gateway.oauth.createTokenFromCode({
    code: codeFromQueryString
  }, (err, response) => {

    // const accessToken = response.credentials.accessToken;
    // const expiresAt = response.credentials.expiresAt;
    // const refreshToken = response.credentials.refreshToken;

    console.log(response);
    // console.log(accessToken);
    // console.log(refreshToken);
  });


  res.json({ url: 'getAccessToken' });

  // {
  //   credentials: OAuthCredentials {
  //     accessToken: 'access_token$sandbox$kq7t3257dqmnpjrz$f2e0707e0990530f035191546b37ec3e',
  //       refreshToken: 'refresh_token$sandbox$kq7t3257dqmnpjrz$267dc42afb4fda2f5af3d96d13658b8d',
  //         tokenType: 'bearer',
  //           expiresAt: '2021-08-23T01:47:23Z',
  //             scope: 'shared_vault_transactions'
  //   },
  //   success: true
  // }
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