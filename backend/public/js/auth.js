const login = document.querySelector('.login');
login?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { email, password } = event.target;

  const response = await fetch('/auth/login', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  const data = await response.json();

  if (data.message === 'sucess') {
    window.location.replace('/');
  } else {
    document.querySelector('.form-text').innerText = data.message;
  }
});
