const React = require('react');
const Layout = require('./Layout');

function Main({ user }) {
  return (
    <Layout user={user}>
      <div>
        {!user ? (
          <h1>Skeleton_1</h1>
        ) : (
          <h1>
            Hello,
            {' '}
            {user.email}
          </h1>
        )}
      </div>
    </Layout>
  );
}
module.exports = Main;
