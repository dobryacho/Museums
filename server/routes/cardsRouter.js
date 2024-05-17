const express = require('express');
const { Card } = require('../db/models');
const router = express.Router();

router.get('/', async (req, res) => {
  const { userId } = req.query;
  const cards = await Card.findAll({ where: { userId } });
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

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { userId, validity } = req.body;
  await Card.update({ userId, validity }, { where: { id } });
  const updatedCard = await Card.findByPk(id);
  res.json(updatedCard);
  console.log('CARRRRRR', updatedCard);
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
