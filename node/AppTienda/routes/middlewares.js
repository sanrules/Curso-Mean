const jsonwebtoken = require('jsonwebtoken');
const moment = require('moment');
const Usuario = require('../models/usuario');

const checkToken = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];

        // Comprobamos si el token está incluido
        if (!token) {
            throw { message: "La cabecera de Authorization es obligatoria" };
        }

        // Comprobamos que el token es correcto
        const decodedToken = jsonwebtoken.verify(token, process.env.JWT_KEY);
        console.log(decodedToken);
        // Comprobamos la expiración del token
        const fechaActual = moment().unix();
        if (fechaActual > decodedToken.fechaExpiracion) {
            throw { message: "El token está caducado" }
        }

        req.user = await Usuario.findById(decodedToken.usuarioId);

    } catch (error) {
        return res.status(401).json({ error: error.message })
    }

    next();
};

module.exports = { checkToken };