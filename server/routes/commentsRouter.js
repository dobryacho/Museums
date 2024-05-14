const express = require('express');
const { Comment } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const comments = await Comment.findAll();
  res.json(comments);
});

router.get('/:id', async (req, res) => {
  const comment = await Comment.findByPk(req.params.id);
  res.json(comment);
});

router.post('/', async (req, res) => {
  const comment = await Comment.create(req.body);
  res.json(comment);
});

router.patch('/:id', async (req, res) => {
  const comment = await Comment.findByPk(req.params.id);
  await comment.update(req.body);
  res.json(comment);
});

router.delete('/:id', async (req, res) => {
  await Comment.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = router;