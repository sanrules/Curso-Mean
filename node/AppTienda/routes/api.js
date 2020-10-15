const router = require('express').Router();
const { checkToken } = require('./middlewares');

const apiProductosRouter = require('./api/productos');
const apiUsuariosRouter = require('./api/usuarios');
const apiClientesRouter = require('./api/clientes');

router.use('/productos', checkToken, apiProductosRouter);
router.use('/usuarios', apiUsuariosRouter);
router.use('/clientes', apiClientesRouter);

module.exports = router;