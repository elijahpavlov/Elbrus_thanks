const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const LoginForm = require('../../views/LoginForm');

const { User } = require('../../db/models');
const RegForm = require('../../views/RegForm');

authRouter.get('/', (req, res) => {
  res.redirect(('/'));
});

authRouter.get('/login', (req, res) => {
  res.renderComponent(LoginForm);
});

authRouter.get('/reg', (req, res) => {
  res.renderComponent(RegForm);
});

authRouter.post('/reg', async (req, res) => {
  try {
    if (req.body.login.length < 4
      || req.body.password.length < 7
      || req.body.password !== req.body.password2) {
      const message = 'Пароли не совпадают и/или пароль слишком короткий';
      res.renderComponent(RegForm, { message });
      return;
    }
    const existUser = await User.findOne({ where: { login: req.body.login } });
    if (existUser) {
      const message = 'Такой пользователь уже существует';
      res.renderComponent(RegForm, { message });
      return;
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = await User.create(
      {
        login: req.body.login,
        password: hash,
      },
    );
    req.session.user = {
      id: user.id,
      login: user.login,
    };
    res.redirect('/');
  } catch ({ message }) {
    res.json({ error: message });
  }
});
module.exports = authRouter;
