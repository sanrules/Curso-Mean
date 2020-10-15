const router = require('express').Router();
const Persona = require('../models/persona');
const Producto = require('../models/producto');

// Insertar una persona
router.get('/insert', (req, res) => {
    const pers = new Persona();
    pers.nombre = "Rosa";
    pers.apellidos = "Rosae";
    pers.email = "rosae@gmail.com";
    pers.edad = 15;
    pers.activo = false;

    //* Con callback
    // pers.save((err, nuevaPersona) => {
    //     if (err) {
    //         return res.send("Error en la inserción");
    //     }
    //     console.log(nuevaPersona);
    //     res.send("Se ha insertado una nueva persona");
    // });

    //* Con promesa
    pers.save()
        .then(nuevaPersona => {
            console.log(nuevaPersona);
            res.send("Se ha insertado una nueva persona");
        })
        .catch(error => console.log(error));
});

//* Inserta una persona a través de create
router.get('/insert_v2', (req, res) => {
    Persona.create({
        nombre: "Fulanito",
        apellidos: "De Tal",
        email: "Fulanito@gmail.com",
        edad: 85,
        activo: false
    })
        .then(nuevaPersona => {
            console.log(nuevaPersona);
            res.send("Se ha insertado una nueva persona");
        })
        .catch(error => console.log(error));
});


//* Inserta una persona con create (async-await)
// Await va delante de lo que queremos hacer. Async delante de la función que lo contiene
router.get('/insert_v3', async (req, res) => {
    try {
        const nuevaPersona = await Persona.create({
            nombre: "Menganita",
            apellidos: "De Tal",
            email: "menganita@gmail.com",
            edad: 54,
            activo: true
        });
        console.log(nuevaPersona);
        res.send("Se ha insertado una nueva persona");
    } catch (error) {
        console.log(error);
    }
});

//* Recupero todas las personas
router.get('/find', (req, res) => {
    Persona.find()
        .then(personas => {
            res.json(personas);
        })
        .catch(error => console.log(error));
});

//* Recupero por nombre concreto
router.get('/find_by_name', async (req, res) => {
    try {
        const personas = await Persona.find({ nombre: "Menganita" });
        res.json(personas);
    } catch (error) {
        console.log(error)
    }
});

//* Recupero los mayores de edad y menores de 65 (filtro and)
router.get('/find_mayores_edad', async (req, res) => {
    try {
        const personas = await Persona.find({ edad: { $gt: 18, $lt: 65 } });
        for (let persona of personas) {
            console.log(persona.nombre_completo)
        }
        res.json(personas);
    } catch (error) {
        console.log(error)
    }
});

//* Modificar una persona
router.get('/modificar', (req, res) => {
    Persona.findById("5f8080f2a3dcae9da302282f")
        .then(persona => {
            persona.nombre = "NombreModificado";
            persona.save();
            res.json(persona);
        })
        .catch(error => console.log(error));
});

//* Modificar una persona
router.get('/modificar_v2', (req, res) => {
    Persona.findByIdAndUpdate("5f8080f2a3dcae9da302282f", { apellidos: "Apellido Modificado" }, { useFindAndModify: false, new: true })
        .then(personaEditada => {
            res.json(personaEditada);
        })
        .catch(error => console.log(error));
});

//* Modificar las personas que cumplan una condición
router.get('/modificar_v3', async (req, res) => {
    try {
        const result = await Persona.updateMany({ activo: true }, { activo: false });
        res.json(result);
    } catch (error) {
        console.log(error);
    }
});

//* Recuperar todos los productos del mismo departamento
router.get('/mismo_departamento', (req, res) => {
    const prod = new Producto();
    prod.departamento = 'electrodomesticos';

    /*prod.mismoDepartamento((err, productos) => {
        if (err) {
            return console.log(err)
        } else {
            res.json(productos);
        }
    });*/

    prod.mismoDepartamentov2()
        .then(productos => {
            res.json(productos);
        })
        .catch(error => console.log(error));
});

//* Recuperar todas las personas activas
router.get('/activas', async (req, res) => {
    try {
        const personasActivas = await Persona.activos();
        res.json(personasActivas);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;