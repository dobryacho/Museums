const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({ where: { login } });
  if (!user) {
    return res.json({ err: 'Такого пользователя нет, зарегистрируйтесь' });
  }
  const checkPass = await bcrypt.compare(password, user.password);
  if (checkPass) {
    req.session.login = user.login;
    res.json(user);
  } else {
    res.json({ err: 'Пароль неверный' });
  }
});

router.post('/', async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({ where: { login } });
  if (user) {
    return res.json({ err: 'Такой пользователь уже есть' });
  }
  const hash = await bcrypt.hash(password, 10);
  const newUser = await User.create({ login, password: hash });
  req.session.login = newUser.login;
  req.session.save(() => {
    res.json(newUser);
  });
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('cookieName');
    res.end();
  });
});

router.get('/auth', async (req, res) => {
  console.log(req.session);
  if (req.session?.login) {
    const user = await User.findOne({ where: { login: req.session.login } });
    return res.json(user);
  }
  res.json({ err: 'Nope' });
});

module.exports = router;
