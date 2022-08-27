const page404 = require('../views/page404');

function pageNotFound(req, res) {
  const { user } = req.session;
  res.renderComponent(page404, { user });
}
module.exports = pageNotFound;
