const loginForm = document.querySelector('.login');
if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { login, password } = event.target;

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
      window.location.replace('/');
    } else {
      document.querySelector('.form-text').innerText = data.message;
    }
  });
}
