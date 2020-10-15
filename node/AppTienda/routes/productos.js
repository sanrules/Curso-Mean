const router = require('express').Router();

const { route } = require('.');
const Producto = require('../models/producto');

router.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.render("productos/index.pug", { productos });
    } catch (error) {
        console.log(error);
    }
});

router.get('/new', (req, res) => {
    res.render("productos/new.pug")
});

router.get('/departamento/:departamento', async (req, res) => {
    try {
        const productos = await Producto.find({ departamento: req.params.departamento });
        res.render("productos/index", { productos });
    } catch (error) {
        console.log(error);
    }
});

router.get('/:idProducto', (req, res) => {
    Producto.findById(req.params.idProducto)
        .then(producto => {
            res.render("productos/detail.pug", { producto });
        })
        .catch(error => console.log(error));
});

router.get('/edit/:idProducto', async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.idProducto);
        res.render("productos/edit", { producto });
    } catch (error) {
        console.log(error);
    }
});

router.get('/delete/:idProducto', async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.idProducto);
        res.redirect("/productos");
    } catch (error) {
        console.log(error);
    }
});

router.post('/create', async (req, res) => {
    console.log(req.body);
    try {
        await Producto.create(req.body);
        res.redirect('/productos');
    } catch (error) {
        console.log(error)
    }

});

router.post('/update', async (req, res) => {
    try {
        await Producto.findByIdAndUpdate(req.body._id, req.body, { useFindAndModify: false });
        res.redirect('/productos');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;