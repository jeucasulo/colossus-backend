require('dotenv').config()
const { MongoClient } = require('mongodb');

exports.mongoConnect = () => {


  user = encodeURIComponent(process.env.MONGO_USER);
  password = encodeURIComponent(process.env.MONGO_PASSWORD);
  // const uri = "mongodb+srv://<username>:<password>@cluster0.rzkfk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  uri = "mongodb+srv://" + user + ":" + password + "@cluster0.rzkfk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  return client;
};






// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://colossus:<password>@cluster0.rzkfk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


/**
 * @moved
 * @to BraintreeController
 * @function getCode
 */



// client.connect(err => {
//   const collection = client.db("colossus").collection("accessToken"); // db and table
//   // perform actions on the collection object
//   console.log(collection);
//   client.close();
// });



// (async () => {
//   await client.connect(async err => {
//     const collection = client.db("colossus").collection("accessToken"); // db and table
//     // perform actions on the collection object

//     collection.deleteMany();

//     const result = await collection.insertOne({
//       "type": "accessToken",
//       "accessTokenData": [
//         "OI AMIGOS DA AMIGOS DA REDE BOBO 222",
//         "22/08/21"
//       ]
//     });

//     console.log(result);

//     client.close();
//   });
// })();

