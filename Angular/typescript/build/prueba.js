//* Variables
let activo = true;
let cadena = 'Hola mundo';
let numero = 21;
let numeros = [2, 3, 4, 5, 6];
let numeros2 = ['uno', 'casa', 'rojo'];
var Estado;
(function (Estado) {
    Estado["offline"] = "ofline";
    Estado["desconocido"] = "desconocido";
    Estado["online"] = "online";
})(Estado || (Estado = {}));
;
let isOnline = Estado.desconocido;
console.log(isOnline);
let sinTipo = "Hola";
sinTipo = 1;
sinTipo = false;
sinTipo = ["String", 3, true];
//* Funciones
// function sumar(a, b) {
//     return a + b;
// }
const sumar = (a, b) => {
    return a + b;
};
sumar(1, 2);
function mostrarPersona(pPersona) {
    console.log(pPersona);
}
;
mostrarPersona({ nombre: "Sandra", apellido: "Cerro", edad: 27 });
