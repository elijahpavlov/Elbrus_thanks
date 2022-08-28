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
          <h1>Elbrus Thanks</h1>
          <form action="/list" className="loginForm" onSubmit={handleSubmit}>
            <input type="text" name="login" />
            <input type="password" name="password" />
            <div className="helpText" />
            <button type="submit">Войти</button>
          </form>
        </header>
      </div>
    </div>
  );
}

export default Main;
