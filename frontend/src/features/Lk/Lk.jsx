/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
import { React, useState } from 'react';

function Lk() {
  const [message, setMessage] = useState('');

  async function userEdit(event) {
    event.preventDefault();
    const login = event.target.login.value;
    const password = event.target.password.value;
    const repeatPassword = event.target.repeatPassword.value;

    if (password === repeatPassword) {
      const response = await fetch('/lk/newPassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });
      console.log(response);
      const result = await response.json();
      console.log(result);
      if (result.update === true) {
        window.location.href = '/list';
      } else {
        setMessage(result.update);
      }
    } else {
      setMessage('Пароли не совпадают');
    }
  }

  return (
    <div>
            {user
        ? 
      <div className="App">
        <header className="App-header">
          <form action="/lk" className="loginChangeForm" onSubmit={userEdit} style={{ width: '80vw', marginBottom: '15vh' }}>
            <h1 style={{ color: '#4520AB', fontSize: '50px', margin: '5vh' }}>Личный кабинет</h1>
            <h4 style={{ color: '#4520AB' }}>Редактирование пользователя:</h4>
            <input type="text" name="login" className="form-control form-control-lg" placeholder="Логин" />
            <input type="password" name="password" className="form-control form-control-lg" placeholder="Пароль" style={{ marginTop: '10px', marginBottom: '10px' }} />
            <input type="password" name="repeatPassword" className="form-control form-control-lg" placeholder="Повторите пароль" style={{ marginTop: '10px', marginBottom: '10px' }} />
            <div className="helpText" style={{ color: 'red' }} />
            <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '30px' }}>Изменить</button>
          </form>
          <div style={{ color: '#4520AB' }}>{message}</div>
        </header>
      </div>
      :
      <></>}
    </div>
  );
}

export default Lk;
