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
    req.session.userId = user.id;
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

  req.session.userId = newUser.id;
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
  if (req.session?.login) {
    const user = await User.findOne({ where: { email: req.session.login } });
    return res.json(user);
  } else {
    res.json({ anon: true });
  }
});

router.get('/visit/:id', async (req, res) => {
  const { lang } = req.query;

  const users = await User.findAll({
    where: { id: req.params.id },
    include: [
      {
        model: Museum,
        as: 'visitedMuseums',
        attributes: [
          'id',
          lang === 'en' ? 'name_en' : lang === 'de' ? 'name_de' : 'name',
        ],
      },
      'recalledMuseums',
    ],
  });
  res.json(users);
});

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
  const { lang } = req.query;

  const favorites = await User.findAll({
    where: { id: req.params.id },
    attributes: ['id'],
    include: [
      {
        model: Museum,
        as: 'favoriteMuseums',
        attributes: [
          'id',
          'photo',
          lang === 'en' ? 'name_en' : lang === 'de' ? 'name_de' : 'name',
        ],
      },
      'recalledMuseums',
    ],
  });
  res.json(favorites);
});

module.exports = router;
