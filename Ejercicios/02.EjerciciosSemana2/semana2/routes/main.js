const router = require('express').Router();

router.get('/index', (req, res) => {
    res.render("main/index.pug")
});

router.get('/about', (req, res) => {
    res.render("main/about.pug")
});

module.exports = router;
