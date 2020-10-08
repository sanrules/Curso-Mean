const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("productos/index.pug");
});

router.get('/new', (req, res) => {
    res.render("productos/new.pug")
});

router.get('/:idProducto', (req, res) => {
    let idProducto = req.params.idProducto;
    res.render("productos/detail.pug");
    console.log("Id del producto", idProducto);
});

router.get('/edit/:idProducto', (req, res) => {

});

router.get('/delete/:idProducto', (req, res) => {

});

router.post('/create', (req, res) => {
    console.log(req.body);
    res.redirect('/productos');
});

router.post('/update', (req, res) => {

});




module.exports = router;