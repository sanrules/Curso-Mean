const router = require('express').Router();
const Cliente = require('../../models/cliente');
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
    Cliente.find()
        .then(clientes => res.json(clientes))
        .catch(error => res.status(500).json({ error: error.message }));
});

router.post('/', [
    check('nombre').exists().notEmpty(),
    check('apellidos').exists().notEmpty(),
    check('direccion').exists().notEmpty(),
    check('email').exists().isEmail(),
    check('dni').exists().isIdentityCard("ES")
], (req, res) => {

    // validamos req.body 
    const erroresValidacion = validationResult(req);
    if (!erroresValidacion.isEmpty()) {
        return res.json(erroresValidacion.array());
    }

    Cliente.create(req.body)
        .then(nuevocliente => {
            res.json({
                success: "El cliente se ha creado con éxito",
                cliente: nuevocliente
            });
        })
        .catch(error => res.status(422).json({ error: error.message }));
});

router.put('/', (req, res) => {

    Cliente.findByIdAndUpdate(req.body._id, req.body, { new: true })
        .then(clienteEditado => {
            res.json({
                success: "El cliente se ha editado correctamente",
                cliente: clienteEditado
            });
        })
        .catch(error => res.status(422).json({ error: error.message }));
});

router.delete('/:idCliente', check("idCliente").isMongoId(), (req, res) => {

    // validamos req.body 
    const erroresValidacion = validationResult(req);
    if (!erroresValidacion.isEmpty()) {
        return res.json(erroresValidacion.array());
    }

    Cliente.findByIdAndDelete(req.params.idCliente)
        .then(clienteBorrado => {
            res.json({
                success: "El cliente se ha borrado correctamente",
                cliente: clienteBorrado
            });
        })
        .catch(error => res.status(422).json({ error: error.message }));
});

module.exports = router;