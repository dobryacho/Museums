const express = require('express');
const router = express.Router();

// Импортируем миддлварку
const addNewsMiddleware = require('../middleware/addNews');

router.post('/', addNewsMiddleware.single('avatar'), (req, res) => {
  try {
    if (req.file) {
      res.json(req.file);
    }
  } catch (error) {
    console.log('Ошибка добавления фотографии новости в папку!', error);
  }
});

module.exports = router;
