const express = require('express');
const _ = require('lodash');

const router = express.Router();

const db = require('../../models/index');

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const { dataValues: user } = await db.users.findOne({ id });

  res.json(_.omit(user, 'password'));
});

router.post('/login', async (req, res) => {
  const { body } = req;
  const { email, password } = body;
  const { dataValues: user } = await db.users.findOne({ email, password });

  res.json({
    message: 'Success',
    email: user.email,
  });
});

router.post('/signup', async (req, res) => {
  const { body } = req;

  const user = await db.users.create(body);

  res.json({
    message: 'Success',
    email: user.email,
    id: user.id,
  });
});

module.exports = router;
