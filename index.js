require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookiepParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes') 


const { env: { PORT, MONGO_URL: url }, argv: [, , port = PORT || 3001], } = process;
app = express()

(async () => {
  await mongoose.connect(url, { useNewUrlParser: true });

  // express
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
  app.use(morgan('dev'));

  // routes 
  app.use(routes);

  // app.use(function (req, res, next) {
  //     res.status(404).json({ error: 'Not found.' });
  // });

  // Error catching endware.
  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
      const status = err.status || 500;
      const message = err.message || err;
      console.error(err);
      res.status(status).send(message);
  });

  app.listen(port, () => console.log(`${package.name} ${package.version} na porta ${port}`))
})();

