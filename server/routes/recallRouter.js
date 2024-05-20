const { Recall } = require('../db/models');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const recalls = await Recall.findAll();
  res.json(recalls);
});

router.get('/:id', async (req, res) => {
  const recall = await Recall.findByPk(req.params.id);
  res.json(recall);
});

router.post('/', async (req, res) => {
  const recall = await Recall.create(req.body);
  res.json(recall);
});

router.patch('/', async (req, res) => {
  const { userId, museumId, text } = req.body;
  const recall = await Recall.findOne({ where: { userId, museumId } });
  await recall.update({ text });
  res.json(recall);
});

router.delete('/', async (req, res) => {
  const { userId, museumId } = req.body;
  await Recall.destroy({ where: { userId, museumId } });
  res.sendStatus(200).end();
});

module.exports = router;