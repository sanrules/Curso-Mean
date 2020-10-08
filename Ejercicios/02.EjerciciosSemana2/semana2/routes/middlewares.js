const fs = require('fs');
const moment = require('moment');

const timerMd = (req, res, next) => {
    horaActual = new Date().getHours();
    if (horaActual > 8 && horaActual < 17) {
        next();
    } else {
        //res.send('Acceso no disponible');
        next();
    }
};

module.exports = {
    timerMd
};