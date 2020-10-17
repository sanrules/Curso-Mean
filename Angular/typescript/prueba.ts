//* Variables

let activo: boolean = true;

let cadena: string = 'Hola mundo';

let numero: number = 21;

let numeros: number[] = [2, 3, 4, 5, 6];
let numeros2: Array<string> = ['uno', 'casa', 'rojo'];

enum Estado {
    offline = "ofline",
    desconocido = "desconocido",
    online = "online"
};

let isOnline: Estado = Estado.desconocido;
console.log(isOnline);

let sinTipo: any = "Hola";
sinTipo = 1;
sinTipo = false;
sinTipo = ["String", 3, true];

//* Funciones

// function sumar(a, b) {
//     return a + b;
// }

const sumar = (a: number, b: number): number => {
    return a + b;
}

sumar(1, 2);

//* Interfaces

interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
}

function mostrarPersona(pPersona: Persona) {
    console.log(pPersona);
};

mostrarPersona({ nombre: "Sandra", apellido: "Cerro", edad: 27 });