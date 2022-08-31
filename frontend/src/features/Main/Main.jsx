/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useState, useEffect } from "react";
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/Context';

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

    // data.user.login

    if (data.message === 'success') {
      await setContext(true);
      navigate('/list');
    } else {
      document.querySelector('.helpText').innerText = data.message;
    }
  }

  return (
    <>
      {context === null && (
      <div style={{ display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center', columnGap: '1em' }}>
        <div className="spinner-grow text-primary" role="status" style={{ backgroundColor: '#4520AB' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-primary" role="status" style={{ backgroundColor: '#4520AB' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-primary" role="status" style={{ backgroundColor: '#4520AB' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      )}
      {context === false && (
      <div>
        <div className="App">
          <header className="App-header">
            <form action="/list" className="loginForm" onSubmit={handleSubmit} style={{ width: '80vw', marginBottom: '15vh' }}>
              <img src="/logo.png" alt="logo" width="300vw" />
              <input type="text" name="login" className="form-control form-control-lg" placeholder="Логин" />
              <input type="password" name="password" className="form-control form-control-lg" placeholder="Пароль" style={{ marginTop: '10px', marginBottom: '10px' }} />
              <div className="helpText" style={{ color: 'red' }} />
              <div className="form-check">
                <input className="form-check-input" type="checkbox" checked="checked" value="" id="flexCheckDefault" />
                <label className="form-check-label" style={{ color: '#4520AB' }}>
                  Спасибо Лейле за атмосферу
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '30px', backgroundColor: '#4520AB', color: '#29EDFF' }}>Войти</button>
            </form>
          </header>
        </div>
      </div>
      )}
    </>
  );
}

export default Main;
