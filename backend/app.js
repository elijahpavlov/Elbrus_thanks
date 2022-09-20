require('dotenv').config();

const express = require('express');
// const { sequelize } = require('./db/models');
const path = require('path');
const sequelize = require('./database');
const config = require('./config/config');

const phaseShiftRouter = require('./routes/api/phaseShiftRouter');
const authRouterApi = require('./routes/api/authRouteApi');
const listRouter = require('./routes/api/listRouteApi');
const editRouter = require('./routes/api/editRouteApi');
const lkRouterApi = require('./routes/api/lkRouteApi');
const deleteRouter = require('./routes/api/deleteRouteApi');

sequelize.sync().then(() => console.log('db is ready'));

const app = express();
config(app);

const PORT = process.env.PORT ?? 4000;

app.use('/phaseshift', phaseShiftRouter);
app.use('/api/auth', authRouterApi);
app.use('/api/list', listRouter);
app.use('/api/edit', editRouter);
app.use('/lk', lkRouterApi);
app.use('/api/delete', deleteRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

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
