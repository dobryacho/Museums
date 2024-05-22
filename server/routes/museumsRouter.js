const express = require('express');
const { Museum } = require('../db/models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { lang } = req.query;

    const museums = await Museum.findAll();

    const response = museums.map((museum) => {
      return {
        id: museum.id,
        name:
          lang === 'en'
            ? museum.name_en
            : lang === 'de'
              ? museum.name_de
              : museum.name,
        description:
          lang === 'en'
            ? museum.description_en
            : lang === 'de'
              ? museum.description_de
              : museum.description,
        location:
          lang === 'en'
            ? museum.location_en
            : lang === 'de'
              ? museum.location_de
              : museum.location,
        city:
          lang === 'en'
            ? museum.city_en
            : lang === 'de'
              ? museum.city_de
              : museum.city,
        photo: museum.photo,
        workedTime:
          lang === 'en'
            ? museum.workedTime_en
            : lang === 'de'
              ? museum.workedTime_de
              : museum.workedTime,
        holidays:
          lang === 'en'
            ? museum.holidays_en
            : lang === 'de'
              ? museum.holidays_de
              : museum.holidays,
        theme:
          lang === 'en'
            ? museum.theme_en
            : lang === 'de'
              ? museum.theme_de
              : museum.theme,
        coordinates: museum.coordinates,
      };
    });

    res.json(response);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching museums.' });
  }
});

router.get('/:id', async (req, res) => {
  const { lang } = req.query;
  const museum = await Museum.findByPk(req.params.id, {
    include: 'recalledByUsers',
  });

  const response =
    lang === 'en'
      ? {
          name: museum.name_en,
          description: museum.description_en,
          location: museum.location_en,
          city: museum.city_en,
          workedTime: museum.workedTime_en,
          holidays: museum.holidays_en,
          theme: museum.theme_en,
          photo: museum.photo,
          coordinates: museum.coordinates,
          recalledByUsers: museum.recalledByUsers,
        }
      : lang === 'de'
        ? {
            name: museum.name_de,
            description: museum.description_de,
            location: museum.location_de,
            city: museum.city_de,
            workedTime: museum.workedTime_de,
            holidays: museum.holidays_de,
            theme: museum.theme_de,
            photo: museum.photo,
            coordinates: museum.coordinates,
            recalledByUsers: museum.recalledByUsers,
          }
        : {
            name: museum.name,
            description: museum.description,
            location: museum.location,
            city: museum.city,
            workedTime: museum.workedTime,
            holidays: museum.holidays,
            theme: museum.theme,
            photo: museum.photo,
            coordinates: museum.coordinates,
            recalledByUsers: museum.recalledByUsers,
          };
  res.json(response);
});

router.post('/', async (req, res) => {
  const museum = await Museum.create(req.body);
  res.json(museum);
});

router.patch('/:id', async (req, res) => {
  const museum = await Museum.findByPk(req.params.id);
  await museum.update(req.body);
  res.json(museum);
});

router.delete('/:id', async (req, res) => {
  await Museum.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = router;
