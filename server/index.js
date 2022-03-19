const express = require('express');
const app = express();
const syncAndSeed = require('../db');
const api = require('./routes');

app.use('/', api);

const init = () => {
  syncAndSeed();
  const port = process.env.PORT || 9001;
  app.listen(port, () => console.log(`listening on port ${port}`));
  try {
  } catch (error) {
    console.log(error);
  }
};

init();
