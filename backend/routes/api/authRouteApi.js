const authRouterApi = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

// Роутер "ЛОГИ" по ресту

authRouterApi.post('/login', async (req, res) => {
  if (req.body.login.length > 4 && req.body.password.length > 7) {
    let user;
    try {
      user = await User.findOne({ where: { login: req.body.login } });

      if (!user) {
        res.json({ message: 'Нет пользователя с таким логин и/или паролем.' });
        return;
      }
    } catch ({ message }) {
      res.json({ error: message });
      return;
    }

    try {
      const compPass = await bcrypt.compare(req.body.password, user.password);

      if (!compPass) {
        res.json({ message: 'Неверный логин и/или пароль.' });
        return;
      }
    } catch ({ message }) {
      res.json({ error: message });
      return;
    }

    req.session.user = {
      id: user.id,
      login: user.login,
    };

    res.json({ message: 'success', user });
  } else {
    res.json({ message: 'Слишком короткий логин и/или пароль.' });
  }
});

// Роутер "ЛОГАУТА" с удалением сессии

authRouterApi.delete('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.json({ error: 'Не удалось выйти' });
    }
    // res.clearCookie('user_sid');
    // res.json({ message: 'success' });
  });
  res.clearCookie('user_sid');
  res.json({ message: 'success' });
});

authRouterApi.get('/', (req, res) => {
  if (req.session.user) {
    res.json({ isAdmin: true });
  } else {
    res.json({ isAdmin: false });
  }
});

module.exports = authRouterApi;
