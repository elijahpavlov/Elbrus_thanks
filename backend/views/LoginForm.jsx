const React = require('react');
const Layout = require('./Layout');

function LoginForm() {
  return (
    <Layout>
      <form method="post" action="/auth/login" style={{ width: '20rem', margin: '2rem' }} className="login">
        <div className="mb-3">
          <label htmlFor="exampleInputLogin1" className="form-label">Login</label>
          <input type="login" name="login" className="form-control" id="exampleInputLogin1" aria-describedby="loginHelp" />
          <div id="loginHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </Layout>
  );
}
module.exports = LoginForm;
