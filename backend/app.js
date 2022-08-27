require('@babel/register');
require('dotenv').config();

const express = require('express');
const { sequelize } = require('./db/models');
const config = require('./config/config');

const phaseShiftRouter = require('./routes/api/phaseShiftRouter');
const pageNotFound = require('./middleware/pageNotFound');
const authRouterApi = require('./routes/api/authRouteApi');
const listRouter = require('./routes/api/listRouteApi');

const app = express();
config(app);

const PORT = process.env.PORT ?? 4000;

app.use('/phaseshift', phaseShiftRouter);
app.use('/api', authRouterApi);
app.use('/list', listRouter);

app.use(pageNotFound);

app.listen(PORT, async () => {
  try {
    // eslint-disable-next-line no-console
    console.log(`Server started at ${PORT} port...`);
    await sequelize.authenticate();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  }
});
