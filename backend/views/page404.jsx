const React = require('react');
const Layout = require('./Layout');

function page404({ user }) {
  return (
    <Layout user={user}>
      <h1>Page_not_found</h1>
    </Layout>
  );
}
module.exports = page404;
