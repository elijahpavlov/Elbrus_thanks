const React = require('react');
const Layout = require('./Layout');

function RegForm({ message }) {
  return (
    <Layout>
      <form method="post" action="/auth/reg" style={{ width: '20rem', margin: '2rem' }} className="reg">
        <div className="mb-3">
          <label htmlFor="exampleInputLogin1" className="form-label">Login</label>
          <input type="login" name="login" className="form-control" id="exampleInputLogin1" aria-describedby="loginHelp" />
          <div id="loginHelp" className="form-text" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Confirm password</label>
          <input type="password" name="password2" className="form-control" id="exampleInputPassword1" />
        </div>
        <div>{message}</div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </Layout>
  );
}
module.exports = RegForm;
