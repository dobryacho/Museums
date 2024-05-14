const { VisitedMuseum } = require('../db/models');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const visitedMuseums = await VisitedMuseum.findAll();
  res.json(visitedMuseums);
});

router.get('/:id', async (req, res) => {
  const visitedMuseum = await VisitedMuseum.findByPk(req.params.id);
  res.json(visitedMuseum);
});

router.post('/', async (req, res) => {
  const visitedMuseum = await VisitedMuseum.create(req.body);
  res.json(visitedMuseum);
});

router.patch('/:id', async (req, res) => {
  const visitedMuseum = await VisitedMuseum.findByPk(req.params.id);
  await visitedMuseum.update(req.body);
  res.json(visitedMuseum);
});

router.delete('/:id', async (req, res) => {
  await VisitedMuseum.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = router;