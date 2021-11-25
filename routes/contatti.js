const express = require('express');
const router = express.Router();

router.get('/contatti', (req, res) => {
  res.status(200).send('<h1>Pagina Contatti</h1>');
});

module.exports = router;
