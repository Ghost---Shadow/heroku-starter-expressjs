const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { page } = req.query;
  res.json({
    page,
    data: [
      { body: 'Body 1' },
      { body: 'Body 2' },
      { body: 'Body 3' },
    ],
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, body: 'Body 1' });
});

router.post('/', (req, res) => {
  const { body } = req;
  const id = 1;
  res.json({ id, ...body });
});

module.exports = router;
