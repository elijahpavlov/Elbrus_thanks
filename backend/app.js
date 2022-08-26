require('@babel/register');

const express = require('express');
const { sequelize } = require('./db/models');
const config = require('./config/config');

const indexRouter = require('./routes/indexRouter');
const authRouter = require('./routes/authRouter');

const app = express();
config(app);

const PORT = process.env.PORT ?? 3000;

app.use('/', indexRouter);
app.use('/auth', authRouter);

app.listen(PORT, async () => {
  try {
    console.log(`Server started at ${PORT} port...`);
    await sequelize.authenticate();
  } catch (error) {
    console.log(error.message);
  }
});
