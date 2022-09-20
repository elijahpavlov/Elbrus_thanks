import React from 'react';

function Page404() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <a href="/">
            <img src="/logo.png" alt="logo" width="300vw" />
          </a>
          <h1>
            Что-то пошло не так
            {' '}
          </h1>
          <a href="/" className="a-link">На главную</a>
        </div>
      </header>
    </div>
  );
}

export default Page404;
