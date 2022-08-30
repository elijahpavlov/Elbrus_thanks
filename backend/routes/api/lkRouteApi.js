const lkRouterApi = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

// Отправляет массив со студентами с азпрашиваемой фазе
lkRouterApi.put('/newPassword', async (req, res) => {
  console.log(req.body);
  try {
    const { password } = req.body;
    if (password.length > 7) {
    const { login } = req.session.user;
    console.log(req.session);
    const newPassword = await bcrypt.hash(password, 10);
    const userUpdated = await User.update({ password: newPassword }, { where: { login } });
    console.log('userUpdated', userUpdated);
    res.json({ update: true });
    } else {
    res.json({ update: 'Пароль должен быть более 8 символов' });
    }
  } catch (error) {
    res.json({ update: false });
  }
});

module.exports = lkRouterApi;
