const express = require('express');
const { Card } = require('../db/models');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const cards = await Card.findAll();
  res.json(cards);
});

router.get('/:id', async (req, res) => {
  const card = await Card.findByPk(req.params.id);
  res.json(card);
});

router.post('/', async (req, res) => {
  const card = await Card.create(req.body);
  res.json(card);
});

router.patch('/:id', async (req, res) => {
  const card = await Card.findByPk(req.params.id);
  await card.update(req.body);
  res.json(card);
});

router.delete('/:id', async (req, res) => {
  await Card.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = router;