const express = require('express');
const { PORT } = require('./config/server.config');

const startServer = () => {

  const app = express();

  app.listen(PORT, () => {

    console.log(`Server started at Port number: ${PORT}`);
  })

}

startServer();