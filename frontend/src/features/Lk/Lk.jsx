import { React, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../Context/Context';
import Page404 from '../Error/Page404';
import LoadingPage from '../LoadingPage/LoadingPage';

function Lk() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [context] = useContext(UserContext);

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
      const result = await response.json();
      if (result.update === true) {
        navigate('/list');
      } else {
        setMessage(result.update);
      }
    } else {
      setMessage('Пароли не совпадают');
    }
  }

  return (
    <div>
      {context === null && (<LoadingPage />)}
      {context === true && (
      <div className="App">
        <header className="App-header">
          <form action="/lk" className="loginChangeForm" onSubmit={userEdit}>
            <h1 className="lk-h1">Личный кабинет</h1>
            <h4>Редактирование пользователя:</h4>
            <input type="text" name="login" className="form-control form-control-lg" placeholder="Логин" />
            <input type="password" name="password" className="form-control form-control-lg lk-input" placeholder="Пароль" />
            <input type="password" name="repeatPassword" className="form-control form-control-lg lk-input" placeholder="Повторите пароль" />
            <div className="helpText" />
            <button type="submit" className="btn btn-primary btn-lg btn-elbrus">Изменить</button>
            <div className="helpText">{message}</div>
          </form>

          <Link className="link-style" to="/list">← Вернуться к списку студентов</Link>
        </header>
      </div>
      )}
      {context === false && <Page404 />}
    </div>
  );
}

export default Lk;
