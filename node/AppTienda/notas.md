## RUTAS

### Rutas para la vista

``GET /productos`` - Recupera todos los productos
``GET /productos/IDPRODUCTO`` - Recupera un único producto
``GET /productos/new ``- Formulario con los datos para crear el producto
``GET /productos/edit/IDPRODUCTO`` - Formulario para editar un producto en concreto
``GET /productos/delete/IDPRODUCTO`` - Borra un producto

``POST /productos/create ``- Genera un nuevo producto
``POST /productos/update`` - Editar un producto

### Rutas api

```POST /api/usuarios/login``` - Recibe username y password y devuelve token si la autenticación es correcta
```POST /api/usuarios/registro``` - Recibe los datos del usuario y crea uno nuevo

``GET /api/productos`` - Recupera todos los productos
``POST /api/productos`` - Crea un nuevo producto
``PUT /api/productos`` - Actualiza un producto
``DELETE /api/productos`` - Borra un producto

