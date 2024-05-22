const { Order } = require('../db/models');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
});

router.post('/', async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});


router.delete('/', async (req, res) => {
  const { userId, museumId } = req.body;
  await Order.destroy({ where: { userId, museumId } });
  res.sendStatus(200).end();
});

module.exports = router;