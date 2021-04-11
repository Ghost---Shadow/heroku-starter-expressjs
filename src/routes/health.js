const express = require('express');

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ message: 'I am alive' });
});

module.exports = (app) => {
  app.use(router);
};
