const express = require('express');
const { FavoriteMuseum, News, Museum } = require('../db/models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const userId = req.session.userId;
    const favoriteMuseums = await FavoriteMuseum.findAll({ where: { userId } });
    const museumIds = favoriteMuseums.map((museum) => museum.museumId);
    const news = await News.findAll({
      where: { museumId: museumIds },
      include: {
        model: Museum,
        attributes: ['name', 'location', 'city'],
      },
    });
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'An error occurred while fetching news from favorite museums.',
    });
  }
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
