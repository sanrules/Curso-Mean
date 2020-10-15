const router = require('express').Router();

const { route } = require('.');
const Cliente = require('../models/cliente');

router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.render("clientes/index.pug", { clientes });
    } catch (error) {
        console.log(error);
    }
});

router.get('/new', (req, res) => {
    res.render("clientes/new.pug")
});

router.get('/:idCliente', (req, res) => {
    Cliente.findById(req.params.idCliente)
        .then(cliente => {
            res.render("clientes/detail.pug", { cliente });
        })
        .catch(error => console.log(error));
});

router.get('/edit/:idCliente', async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.idCliente);
        res.render("clientes/edit", { cliente });
    } catch (error) {
        console.log(error);
    }
});

router.get('/delete/:idCliente', async (req, res) => {
    try {
        await Cliente.findByIdAndDelete(req.params.idCliente);
        res.redirect("/clientes");
    } catch (error) {
        console.log(error);
    }
});

router.post('/create', async (req, res) => {
    console.log(req.body);
    try {
        await Cliente.create(req.body);
        res.redirect('/clientes');
    } catch (error) {
        console.log(error)
    }

});

router.post('/update', async (req, res) => {
    try {
        await Cliente.findByIdAndUpdate(req.body._id, req.body, { useFindAndModify: false });
        res.redirect('/clientes');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;