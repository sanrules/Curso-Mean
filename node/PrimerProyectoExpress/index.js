require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end("Respuesta sobre la ruta: /");
});

app.get('/hola', (req, res) => {
    res.end("Hola!");
});

app.post('/', (req, res) => {
    res.end("Respuesta post desde la ruta: /")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto", PORT);
})