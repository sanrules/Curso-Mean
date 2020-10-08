const router = require('express').Router();

router.get('/:productoId', (req, res) => {
    let productoId = req.params.productoId;
    console.log(req.params.productoId);
    res.end(`Producto numero: ${productoId}`);
});

router.post('/create', (req, res) => {
    console.log(req.fechaActual);
    res.end("Crear producto");
});

module.exports = router;