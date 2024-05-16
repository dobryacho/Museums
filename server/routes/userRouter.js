const express = require('express');
const bcrypt = require('bcrypt');
const { User, Museum } = require('../db/models');

const router = express.Router();

router.get('/allusers', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.json({ err: 'Такого пользователя нет, зарегистрируйтесь' });
  }
  const checkPass = await bcrypt.compare(password, user.password);
  if (checkPass) {
    req.session.login = user.email;
    res.json(user);
  } else {
    res.json({ err: 'Пароль неверный' });
  }
});

router.post('/', async (req, res) => {
  const { email, password, firstName, lastName, city, phone } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    return res.json({ err: 'Такой пользователь уже есть' });
  }
  const hash = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    email,
    password: hash,
    firstName,
    lastName,
    city,
    phone,
  });
  console.log('OOOOO', newUser);
  req.session.login = newUser.email;
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
  console.log();
  if (req.session?.login) {
    const user = await User.findOne({ where: { email: req.session.login } });
    return res.json(user);
  }
  res.end();
});

module.exports = router;

router.get('/test', async (req, res) => {
  const users = await User.findAll({
    attributes: ['id'],
    include: {
      model: Museum,
    },
  });
  res.json(users);
});

router.get('/favorites/:id', async (req, res) => {
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', req.params.id);
  const favorites = await User.findAll({where: {id: req.params.id}, attributes: ['id'], include: ['favoriteMuseums']});
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', favorites);
  res.json(favorites);
});