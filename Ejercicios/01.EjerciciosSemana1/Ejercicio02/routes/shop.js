var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('Página shop');
});

router.get('/house', (req, res) => {
  res.send('Página house');
});

module.exports = router;