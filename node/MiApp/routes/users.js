var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', (req, res) => {
  const personas = [{
      'nombre': 'Paco',
      'apellido': 'Pil'
    },
    {
      'nombre': 'Firulais',
      'apellido': 'El Furioso'
    }

  ]
  res.json(personas);
});

module.exports = router;