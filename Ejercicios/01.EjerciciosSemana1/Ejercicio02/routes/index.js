var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/info', (req, res) => {
  res.send('Página info');
});
router.get('/contact', (req, res) => {
  res.send('Página contact');
});
router.get('/about', (req, res) => {
  res.send('Página about');
});


module.exports = router;