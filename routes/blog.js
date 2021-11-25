const express = require('express');
const router = express.Router();

router.get('/blog/articoli', (req, res) => {
  res.status(200).send('<h1>Pagina del Blog</h1>');
});

router.get('/blog/articolo/:titolo', (req, res) => {
  res.status(200).send('<h1>Pagina articolo</h1>');
});

module.exports = router;
