const router = require('express').Router();
const Usuario = require('../../models/usuario');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');

router.post('/registro', async (req, res) => {

    try {
        req.body.password = bcryptjs.hashSync(req.body.password);
        const usuario = await Usuario.create(req.body);
        res.json({
            success: 'Usuario creado con éxito',
            usuario: usuario
        })
    } catch (error) {
        res.json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const usuario = await Usuario.findOne({ email: req.body.email });
        if (!usuario) {
            throw { message: "Error en email y/o clave1" };
        }

        const passwordIguales = bcryptjs.compareSync(req.body.password, usuario.password);
        if (!passwordIguales) {
            throw { message: "Error en email y/o clave2" }
        }

        res.json({
            success: "Login correcto",
            token: createToken(usuario)
        });

    } catch (error) {
        console.log(error);
        res.status(401).json({ error: error.message })
    }
});

function createToken(usuario) {
    const token = {
        usuarioId: usuario._id,
        fechaCreacion: moment().unix(),
        fechaExpiracion: moment().add(10, 'minutes').unix()
    }
    console.log(token);
    return jwt.sign(token, process.env.JWT_KEY)
}

module.exports = router;