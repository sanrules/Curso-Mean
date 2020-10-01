var express = require('express');
var router = express.Router();

router.get('/main', function (req, res, next) {
  res.send('Página main');
});

router.get('/details', (req, res) => {
  res.send('Página details');
});

module.exports = router;