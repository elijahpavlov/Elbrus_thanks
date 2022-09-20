/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../Context/Context';
import LoadingPage from '../LoadingPage/LoadingPage';

function Main() {
  const navigate = useNavigate();
  const [context, setContext] = useContext(UserContext);

  if (context === true) {
    navigate('/list');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { login } = form;
    const { password } = form;

    const response = await fetch('/api/auth/login', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        login: login.value,
        password: password.value,
      }),
    });
    const data = await response.json();

    if (data.message === 'success') {
      await setContext(true);
      navigate('/list');
    } else {
      document.querySelector('.helpText').innerText = data.message;
    }
  }

  return (
    <>
      {context === null && (<LoadingPage />)}
      {context === false && (
      <div>
        <div className="App">
          <header className="App-header">
            <form action="/list" className="loginForm" onSubmit={handleSubmit}>
              <img src="/logo.png" alt="logo" width="300vw" />
              <input type="text" name="login" className="form-control form-control-lg" placeholder="Логин" />
              <input type="password" name="password" className="form-control form-control-lg login-input" placeholder="Пароль" />
              <div className="helpText" />
              <div className="form-check">
                <input className="form-check-input" type="checkbox" checked="checked" value="" id="flexCheckDefault" />
                <label className="form-check-label">
                  Спасибо Лейле за атмосферу
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-elbrus">Войти</button>
            </form>
            <Link className="link-style" to="/about">О разработчиках</Link>
          </header>
        </div>
      </div>
      )}
    </>
  );
}

export default Main;
