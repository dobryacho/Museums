const express = require('express');
const router = express.Router();
const { Scan, User, Museum } = require('../db/models');
const { Op } = require('sequelize');

router.post('/', async (req, res) => {
  const { userId, museumId } = req.body;
  const newScan = await Scan.create({ userId, museumId });
  res.status(201).json(newScan);
});

router.get('/', async (req, res) => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  try {
    const scans = await Scan.findAll({
      where: {
        createdAt: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
      include: [
        { model: User, attributes: ['email'] },
        { model: Museum, attributes: ['name'] },
      ],
    });
    res.json(scans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
