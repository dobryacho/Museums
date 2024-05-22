const express = require('express');
const { News, Museum } = require('../db/models');
const router = express.Router();

// router.get('/', async (req, res) => {
//   const news = await News.findAll({
//     include: {
//       model: Museum,
//       attributes: ['name', 'location', 'city'],
//     },
//   });
//   res.json(news);
// });

router.get('/', async (req, res) => {
  try {
    const { lang } = req.query;

    // Получение всех новостей с соответствующими данными музеев
    const news = await News.findAll({
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

    // Формирование ответа для каждой новости
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
      const museumCity =
        lang === 'en'
          ? museum.city_en
          : lang === 'de'
            ? museum.city_de
            : museum.city;

      return {
        id: newsItem.id,
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
        museumCity,
        photo: newsItem.photo,
        date: newsItem.date,
      };
    });

    // Отправка ответа
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'An error occurred while fetching news.',
    });
  }
});

router.get('/:id', async (req, res) => {
  const news = await News.findByPk(req.params.id);
  res.json(news);
});

router.post('/', async (req, res) => {
  const news = await News.create(req.body);
  res.json(news);
});

router.patch('/:id', async (req, res) => {
  const news = await News.findByPk(req.params.id);
  await news.update(req.body);
  res.json(news);
});

router.delete('/:id', async (req, res) => {
  await News.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = router;
