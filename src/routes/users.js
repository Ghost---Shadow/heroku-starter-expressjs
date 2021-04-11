const express = require('express');

const router = express.Router();

router.get('/users', (req, res) => {
  res.json([
    { name: 'John', height: 150 },
    { name: 'Jill', height: 160 },
    { name: 'Jim', height: 170 },
  ]);
});

module.exports = (app) => {
  app.use(router);
};
