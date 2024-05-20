const express = require('express');
const { Card } = require('../db/models');
const router = express.Router();

router.get('/', async (req, res) => {
  console.log(req.query);
  const { userId } = req.query;
  const cards = await Card.findAll({ where: { userId } });
  console.log(cards);
  res.json(cards);
});

// router.get('/:id', async (req, res) => {
//   const userId = req.params.id;
//   console.log('--->', req.params);

//   const card = await Card.findOne({ where: { userId } });
//   if (card && new Date(card.validity) > new Date()) {
//     console.log('HEEREEEE', res);
//     return res.json({ valid: true });
//   }
//   return res.json({ valid: false });
// });

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
