const router = require('express').Router();

router.get('/:tipoDocumento.:extension', (req, res) => {
    let { tipoDocumento, extension } = req.params;

    res.end(`Documento ${tipoDocumento}.${extension}`);
});
router.get('/all', (req, res) => {
    console.log(req.query);

    res.send("Ruta con todos los documentos");
});
router.post('/nuevo', (req, res) => {
    let { nombre, extension, autor } = req.body;
    console.log(req.body);
    res.end(`Fichero que se va a guardar: ${nombre}.${extension} de ${autor}`);
});


module.exports = router;