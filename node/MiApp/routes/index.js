var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express',
    productos: 1,
    animales: ['perro', 'gato', 'pájaro', 'hámster']
  });
});

router.get('/info', (req, res) => {
  res.render('info', {
    ciudades: ["Madrid", "Pamplona", "Barcelona", "Sevilla", "Cuenca"]
  });

});

module.exports = router;