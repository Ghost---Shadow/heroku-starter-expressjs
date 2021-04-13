const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    email: 'email',
  });
});

router.post('/login', (req, res) => {
  const { body } = req;
  res.json({
    message: 'Success',
    email: body.email,
  });
});

router.post('/signup', (req, res) => {
  const { body } = req;
  res.json({
    message: 'Success',
    email: body.email,
  });
});

module.exports = router;
