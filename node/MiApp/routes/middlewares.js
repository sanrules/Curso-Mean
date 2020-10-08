const fs = require('fs');
const moment = require('moment');

// MIDDLEWARES
const consoleMd = (req, res, next) => {
    console.log("Pasa por el middleware");
    //res.send("Respuesta desde el middleware")
    next();
};

//Middleware que escribe en logs la petición que recibe
const logMd = (req, res, next) => {
    fs.appendFile("./app.log", `[${moment().format('DD-MM-YYYY HH:mm')}] Método: ${req.method}. Url: ${req.url} \n`, (error) => {
        if (error) {
            res.send('Ha ocurrido un error');
        }

    });
    next();
};

// Middleware que obtiene la fecha actual y la coloca dentro de la petición
const fechaActualMd = (req, res, next) => {
    req.fechaActual = moment();
    next();
};

const productosMd = (req, res, next) => {
    console.log("Middleware de productos");
    next();
};

module.exports = {
    consoleMd,
    logMd,
    fechaActualMd,
    productosMd
};
