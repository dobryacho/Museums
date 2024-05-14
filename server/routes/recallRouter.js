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

router.patch('/:id', async (req, res) => {
  const recall = await Recall.findByPk(req.params.id);
  await recall.update(req.body);
  res.json(recall);
});

router.delete('/:id', async (req, res) => {
  await Recall.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = router;