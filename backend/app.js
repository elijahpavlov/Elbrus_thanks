require('@babel/register');

const express = require('express');
const { sequelize } = require('./db/models');
const config = require('./config/config');

const PhaseShiftRouter = require('./routes/phaseShiftRouter');

const app = express();
config(app);

const PORT = process.env.PORT ?? 4000;

app.use('/', PhaseShiftRouter);

app.listen(PORT, async () => {
  try {
    console.log(`Server started at ${PORT} port...`);
    await sequelize.authenticate();
  } catch (error) {
    console.log(error.message);
  }
});
