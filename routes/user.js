const { userAuth, userPerms } = require('../middleware/user-auth');
const express = require('express');
const router = express.Router();

router.use(userAuth, userPerms);

router.get('/user/risorsa-1', (req, res) => {
  console.log("Inizio download...");
  res.send("Ecco la risorsa 1");
});

module.exports = router;
