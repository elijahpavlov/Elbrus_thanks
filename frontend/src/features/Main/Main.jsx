/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useState, useEffect } from "react";
import React from 'react';

function Main() {
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
      window.location.replace('/list');
    } else {
      document.querySelector('.helpText').innerText = data.message;
    }
  }

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <form action="/list" className="loginForm" onSubmit={handleSubmit} style={{ width: '80vw', marginBottom: '15vh' }}>
            <img src="/logo.png" alt="logo" width="300vw" />
            <input type="text" name="login" className="form-control form-control-lg" placeholder="Логин" />
            <input type="password" name="password" className="form-control form-control-lg" placeholder="Пароль" style={{ marginTop: '10px', marginBottom: '10px' }} />
            <div className="helpText" style={{ color: 'red' }} />
            {/* <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" style={{ color: '#4520AB' }}>
                Спасибо Лейле за атмосферу
              </label>
            </div> */}
            <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '30px', backgroundColor: '#4520AB', color: '#29EDFF' }}>Войти</button>
          </form>
        </header>
      </div>
    </div>
  );
}

export default Main;
