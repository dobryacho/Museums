const { Museum } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const museums = await Museum.findAll();
  res.json(museums);
});

router.get('/:id', async (req, res) => {
  const museum = await Museum.findByPk(req.params.id);
  res.json(museum);
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