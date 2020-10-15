const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personaSchema = new Schema({
    nombre: String,
    apellidos: String,
    email: String,
    edad: Number,
    activo: Boolean
});

// Propiedades virtuales
// La función no tiene que ser arrow function porque si no la propiedad "this" no funcionaría
personaSchema.virtual('nombre_completo').get(function () {
    return this.nombre + " " + this.apellidos;
});

// Método de instancia para recuperar todas las persoans activas
personaSchema.statics.activos = function () {
    return this.model('persona').find({ activo: "true", edad: { $gte: 18 } });
};

// Nombre de la colección con el esquema que le va a representar
// Primer parámetro colección(en singular), segundo parámetro esquema
module.exports = mongoose.model('persona', personaSchema);