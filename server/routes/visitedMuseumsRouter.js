const express = require('express');
const  { VisitedMuseum } = require('../db/models');
const router = express.Router();

router.get('/', async (req, res) => {
  const { userId } = req.query;
  console.log('USERID', userId);
  const visitedMuseums = await VisitedMuseum.findAll({ where: { userId } });
  res.json(visitedMuseums);
  console.log('VISITED', visitedMuseums);
});

router.get('/:id', async (req, res) => {
  const visitedMuseum = await VisitedMuseum.findByPk(req.params.id);
  res.json(visitedMuseum);
});

router.post('/', async (req, res) => {
  const { userId, museumId } = req.body;
  const visitedMuseum = await VisitedMuseum.create({ userId, museumId });
  res.json(visitedMuseum);
});

router.patch('/:id', async (req, res) => {
  const visitedMuseum = await VisitedMuseum.findByPk(req.params.id);
  await visitedMuseum.update(req.body);
  res.json(visitedMuseum);
});

router.delete('/:id', async (req, res) => {
  const visitedMuseum = await VisitedMuseum.findByPk(req.params.id);
  const musId = visitedMuseum.museumId;
  await VisitedMuseum.destroy({ where: { id: req.params.id } });
  res.json(musId);
});

module.exports = router;
