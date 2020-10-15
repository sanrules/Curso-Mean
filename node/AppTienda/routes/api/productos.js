const router = require('express').Router();
const Producto = require('../../models/producto');
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {

    console.log(req.user);

    Producto.find()
        .then(productos => res.json(productos))
        .catch(error => res.status(500).json({ error: error.message }));
});

router.post('/', [
    check('nombre').exists().notEmpty(),
    check('descripcion').exists().notEmpty(),
    check('precio').exists().notEmpty().isNumeric(),
    check('departamento').custom(valueDepartamento => {
        const departamentos = ['electrodomesticos', 'informatica', 'hogar', 'fotografia'];
        return departamentos.includes(valueDepartamento);
    })
], (req, res) => {

    // validamos req.body 
    const erroresValidacion = validationResult(req);
    if (!erroresValidacion.isEmpty()) {
        return res.json(erroresValidacion.array());
    }

    Producto.create(req.body)
        .then(nuevoProducto => {
            res.json({
                success: "El producto se ha creado con éxito",
                producto: nuevoProducto
            });
        })
        .catch(error => res.status(422).json({ error: error.message }));
});

router.put('/', check("_id").isMongoId(), (req, res) => {

    const erroresValidacion = validationResult(req);
    if (!erroresValidacion.isEmpty()) {
        return res.json(erroresValidacion.array());
    }

    Producto.findByIdAndUpdate(req.body._id, req.body, { new: true })
        .then(productoEditado => {
            res.json({
                success: "El producto se ha editado correctamente",
                producto: productoEditado
            });
        })
        .catch(error => res.status(422).json({ error: error.message }));
});

router.delete('/:idProducto', check("idProducto").isMongoId(), (req, res) => {
    Producto.findByIdAndDelete(req.params.idProducto)
        .then(productoBorrado => {
            res.json({
                success: "El producto se ha borrado correctamente",
                producto: productoBorrado
            });
        })
        .catch(error => res.status(422).json({ error: error.message }));
});

module.exports = router;