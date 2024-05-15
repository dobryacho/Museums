const express = require('express');
const { FavoriteMuseum } = require('../db/models');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const favoritesMuseums = await FavoriteMuseum.findAll();
  res.json(favoritesMuseums);
});

router.get('/:id', async (req, res) => {
  const favoriteMuseum = await FavoriteMuseum.findByPk(req.params.id);
  res.json(favoriteMuseum);
});

router.post('/', async (req, res) => {
  const favoriteMuseum = await FavoriteMuseum.create(req.body);
  res.json(favoriteMuseum);
});

router.patch('/:id', async (req, res) => {
  const favoriteMuseum = await FavoriteMuseum.findByPk(req.params.id);
  await favoriteMuseum.update(req.body);
  res.json(favoriteMuseum);
});

router.delete('/:id', async (req, res) => {
  await FavoriteMuseum.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = router;
