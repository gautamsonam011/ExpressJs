// routes/blogRouter.js
const express = require('express');
const router = express.Router();
const path = require('path');
const blogs = require('../data/blogsdata');

// Home route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/index.html'));
});

// All blogs route
router.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/blogs.html'));
});

// Single blog post by slug
router.get('/blogspost/:slug', (req, res) => {
  const myblog = blogs.filter((e) => e.slug === req.params.slug);
  console.log(myblog);

  res.sendFile(path.join(__dirname, '../templates/blogspage.html'));
});

module.exports = router;
