/** 
 * Muestra el contenido de los ficheros .md que se encuentren dentro del directorio pasado por parámetros.
 */

let fs = require('fs');
let params = process.argv.slice(2);

let readMdFiles = (path) => {
    files = fs.readdirSync(path).filter(file => /.md$/.test(file));

    if (files.length !== 0) {
        console.log("Ficheros con extensión .md", files);

        files.forEach(file => {
            console.log(file);
            console.log(fs.readFileSync(file).toString());
        });
    } else {
        console.log("No existen ficheros con extensión .md en el directorio", path)
    }
}

if (params.length === 0) {
    console.log("ERROR. No se ha recibido ningún directorio");
} else {
    let path = params[0];
    console.log("Directorio en el que se realiza la búsqueda: ", path);

    if (fs.existsSync(path)) {
        readMdFiles(path);

    } else {
        console.log("ERROR. No existe el directorio", path);
    }
}