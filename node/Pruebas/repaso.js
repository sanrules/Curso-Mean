// Definición de variables
const CONSTANTE = "CONSTANTE"; // guardan el espacio de memoria exacto que necesitan.
let variable;

// Funciones
function sumarV1(a, b) {
    return a + b;
}

// Funciones anónimas
const sumarV2 = function (a, b) {
    return a + b;
}

// Arrow function
const sumarV3 = (a, b) => {
    return a + b;
}

let res1 = sumarV1(1, 2);
let res2 = sumarV2(2, 3);
let res3 = sumarV3(3, 4);

console.log(res1, res2, res3);

// Callback -> pasar función como parámetro de otra función.
// Una función que se ejecuta cuando se ha terminado de hacer la ejecución principal
const sumaRetardo = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 3000);
}

const res4 = sumaRetardo(3, 8, (resultado) => {
    console.log("Termina la suma", resultado);
});
console.log(res4);