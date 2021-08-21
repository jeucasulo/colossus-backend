// https://nodejs.org/en/docs/guides/getting-started-guide/

// https://ezdevs.com.br/comecando-uma-api-rest-com-node-js/

// https://expressjs.com/pt-br/guide/using-middleware.html
// https://qastack.com.br/programming/28305120/differences-between-express-router-and-app-get

// no node
// node src/server.js

// node
// nodemon src/server.js


const http = require('http');

const express = require('express');
const cors = require('cors');
const app = express();

require('./routes/routes')(app); // <--- basta adicionar essa linha
// Colossus\backend\src\routes\routes.js

const hostname = '127.0.0.1';
// const port = 3333;
const port = 3333;

app.use(cors());
app.use(express.json());
app.listen(process.env.PORT || port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World 131313213');
// });

// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });




