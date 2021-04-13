const express = require('express');
const db = require('../../models/index');

const router = express.Router();

const PAGE_SIZE = 10;

router.get('/', async (req, res) => {
  const { page } = req.query;

  const posts = await db.posts.findAll({
    offset: (page - 1) * PAGE_SIZE,
    limit: PAGE_SIZE,
  });

  res.json({ page, posts });
});

router.get('/:user_id', async (req, res) => {
  const { user_id: uid } = req.params;

  const posts = await db.posts.findAll({ where: { user_id: uid } });

  res.json({ posts });
});

router.post('/', async (req, res) => {
  const { body } = req;
  const post = await db.posts.create(body);

  res.json(post);
});

module.exports = router;
