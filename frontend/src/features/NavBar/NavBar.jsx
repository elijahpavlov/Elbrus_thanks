import React from 'react';

export default function Navbar({ user }) {
  return (
    <div>
      {!user ? (
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Skeleton</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/auth/reg">Registration</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/auth/login">Login</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              acc:
              {' '}
              {user.login}
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/auth/lk">LK</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/api/auth/logout">Logout</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
