const express = require('express');

require('express-async-errors');

const routes = require('./routes');

const app = express();

// Middleware para permitir que a API receba requestes com body
app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log('###### Error Handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
