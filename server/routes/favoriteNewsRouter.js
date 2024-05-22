const express = require('express');
const { FavoriteMuseum, News, Museum } = require('../db/models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const userId = req.session.userId;
    const { lang } = req.query;

    const favoriteMuseums = await FavoriteMuseum.findAll({ where: { userId } });
    const museumIds = favoriteMuseums.map((museum) => museum.museumId);

    const news = await News.findAll({
      where: { museumId: museumIds },
      include: {
        model: Museum,
        attributes: [
          lang === 'en' ? 'name_en' : lang === 'de' ? 'name_de' : 'name',
          lang === 'en'
            ? 'location_en'
            : lang === 'de'
              ? 'location_de'
              : 'location',
          lang === 'en' ? 'city_en' : lang === 'de' ? 'city_de' : 'city',
        ],
      },
    });

    const response = news.map((newsItem) => {
      const museum = newsItem.Museum;
      const museumName =
        lang === 'en'
          ? museum.name_en
          : lang === 'de'
            ? museum.name_de
            : museum.name;
      const museumLocation =
        lang === 'en'
          ? museum.location_en
          : lang === 'de'
            ? museum.location_de
            : museum.location;

      return {
        title:
          lang === 'en'
            ? newsItem.title_en
            : lang === 'de'
              ? newsItem.title_de
              : newsItem.title,
        text:
          lang === 'en'
            ? newsItem.text_en
            : lang === 'de'
              ? newsItem.text_de
              : newsItem.text,
        museumId: newsItem.museumId,
        museumName,
        museumLocation,
        photo: newsItem.photo,
        date: newsItem.date,
      };
    });

    res.json(response);
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
