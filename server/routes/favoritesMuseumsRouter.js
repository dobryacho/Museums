const express = require('express');
const { FavoriteMuseum } = require('../db/models');
const router = express.Router();

router.get('/', async (req, res) => {
  const { userId } = req.query;
  const favoritesMuseums = await FavoriteMuseum.findAll({ where: { userId } });
  res.json(favoritesMuseums);
});

router.get('/:id', async (req, res) => {
  const favoriteMuseum = await FavoriteMuseum.findByPk(req.params.id);
  res.json(favoriteMuseum);
});

router.post('/', async (req, res) => {
  const { userId, museumId } = req.body;
  const favoriteMuseum = await FavoriteMuseum.create({ userId, museumId });
  res.json(favoriteMuseum);
});

router.patch('/:id', async (req, res) => {
  const favoriteMuseum = await FavoriteMuseum.findByPk(req.params.id);
  await favoriteMuseum.update(req.body);
  res.json(favoriteMuseum);
});

router.delete('/:id', async (req, res) => {
  const favoriteMuseum = await FavoriteMuseum.findByPk(req.params.id);
  const favMusId = favoriteMuseum.museumId;
  await FavoriteMuseum.destroy({ where: { id: req.params.id } });
  res.json(favMusId);
});

module.exports = router;
