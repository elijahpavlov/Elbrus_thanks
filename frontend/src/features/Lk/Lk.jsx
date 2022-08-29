/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
function Lk() {
  async function handleSubmit(event) {
    event.preventDefault();
    const login = event.target.login.value;
    const password = event.target.password.value;
    const repeatPassword = event.target.repeatPassword.value;

    if (password === repeatPassword) {
      const response = await fetch('/lk', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });

      const result = await response.json();
      console.log(result);
    }
  }

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <form action="/lk" className="loginChangeForm" onSubmit={handleSubmit} style={{ width: '80vw', marginBottom: '15vh' }}>
            <h1 style={{ color: '#4520AB', fontSize: '50px', margin: '5vh' }}>Личный кабинет</h1>
            <h4 style={{ color: '#4520AB' }}>Редактирование пользователя:</h4>
            <input type="text" name="login" className="form-control form-control-lg" placeholder="Логин" />
            <input type="password" name="password" className="form-control form-control-lg" placeholder="Пароль" style={{ marginTop: '10px', marginBottom: '10px' }} />
            <input type="password" name="repeatPassword" className="form-control form-control-lg" placeholder="Повторите пароль" style={{ marginTop: '10px', marginBottom: '10px' }} />
            <div className="helpText" style={{ color: 'red' }} />
            <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '30px' }}>Изменить</button>
          </form>
        </header>
      </div>
    </div>
  );
}

export default Lk;