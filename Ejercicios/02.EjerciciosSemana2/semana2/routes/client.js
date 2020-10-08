const router = require('express').Router();

router.get('/index', (req, res) => {
    res.render("client/index.pug")
});

router.get('/new', (req, res) => {
    res.render("client/new.pug")
});

module.exports = router;