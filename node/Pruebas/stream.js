let fs = require('fs');
let stream = fs.createReadStream('./Biteplants.txt', 'UTF-8');
let data = "";
let count = 0;

stream.once('data', () => {
    console.log('Empieza a leer el fichero');
})

stream.on('data', (chunk) => {
    data += chunk
    console.log('Chunk', ++count);
})

stream.on('end', () => {
    console.log('Termina de leer el fichero', data.length);
})