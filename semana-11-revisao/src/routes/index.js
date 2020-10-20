const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    título: "Séries"
  });
});

module.exports = router;
