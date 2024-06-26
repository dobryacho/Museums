const express = require('express');
const { News, Museum } = require('../db/models');
const router = express.Router();

router.get('/', async (req, res) => {
  const news = await News.findAll({
    include: {
      model: Museum,
      attributes: ['name', 'location', 'city'],
    },
  });
  console.log(news);
  res.json(news);
});

router.get('/:id', async (req, res) => {
  const news = await News.findByPk(req.params.id);
  res.json(news);
});

router.post('/', async (req, res) => {
  const news = await News.create(req.body);
  res.json(news);
});

router.patch('/:id', async (req, res) => {
  const news = await News.findByPk(req.params.id);
  await news.update(req.body);
  res.json(news);
});

router.delete('/:id', async (req, res) => {
  await News.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = router;
