const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const LoginForm = require('../views/LoginForm');

const { User } = require('../db/models');
const RegForm = require('../views/RegForm');

authRouter.get('/', (req, res) => {
  res.redirect(('/'));
});

authRouter.get('/login', (req, res) => {
  res.renderComponent(LoginForm);
});

authRouter.post('/login', async (req, res) => {
  if (req.body.email.length > 4 && req.body.password.length > 7) {
    let user;
    try {
      user = await User.findOne({ where: { email: req.body.email } });

      if (!user) {
        res.json({ message: 'Нет пользователя с таким email и/или паролем.' });
        return;
      }
    } catch ({ message }) {
      res.json({ error: message });
      return;
    }

    try {
      const compPass = await bcrypt.compare(req.body.password, user.password);

      if (!compPass) {
        res.json({ message: 'Не верный email и/или пароль.' });
        return;
      }
    } catch ({ message }) {
      res.json({ error: message });
      return;
    }

    req.session.user = {
      id: user.id,
      email: user.email,
    };
    res.json({ message: 'sucess' });
  } else {
    res.json({ message: 'Слишком короткий email и/или пароль.' });
  }
});

authRouter.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.json({ error: 'Не удалось выйти' });
      return;
    }

    res.clearCookie('user_sid');
    res.redirect('/');
  });
});

authRouter.get('/reg', (req, res) => {
  res.renderComponent(RegForm);
});

authRouter.post('/reg', (req, res) => {
  
})
module.exports = authRouter;
