const {
    dir
} = require('console');
const fs = require('fs');
const {
    findSourceMap
} = require('module');

// Ver un directorio
fs.readdir('.', (err, files) => {
    console.log(files);

    files.forEach(file => {
        console.log(file);
        // Leer un fichero
        // fs.readFile(file, (err, data) => {
        //     console.log(data.toString())
        // });
    });

    if (err) {
        console.log('error', err);
    }
});

// Crear un directorio
let directorio = "bin";
if (fs.existsSync(directorio)) {
    console.log('Ya existe el directorio', directorio);
    fs.rmdir(directorio, () => {
        console.log("Fichero borrado", directorio);
    });
} else {
    fs.mkdir(directorio, () => {
        console.log("Directorio creado", directorio);
    })
}