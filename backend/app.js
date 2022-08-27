require('@babel/register');

const express = require('express');
const { sequelize } = require('./db/models');
const config = require('./config/config');

const pageNotFound = require('./middleware/pageNotFound');
const indexRouter = require('./routes/view/indexRouter');
const authRouter = require('./routes/view/authRouter');
const authRouterApi = require('./routes/api/authRouteApi');
const listRouter = require('./routes/api/listRouteApi');

const app = express();
config(app);

const PORT = process.env.PORT ?? 3000;

app.use('/', indexRouter);
app.use('/auth', authRouter);
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
