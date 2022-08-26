const indexRouter = require('express').Router();
const Main = require('../views/Main');

indexRouter.get('/', (req, res) => {
  const { user } = req.session;
  res.renderComponent(Main, { user });
});
module.exports = indexRouter;
