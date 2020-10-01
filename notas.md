# Node.js

- NestJS
- DENO - Evolución de nodejs (typescript, importaciones dinámicas). Es posible que sustituya a node en unos años. Del mismo creador.

## Qué es

- Node es un motor de ejecución Javascript mucho más potente que los que están en el navegador, ya que permite el acceso a muchas otras cosas que no se pueden realizar desde el navegador (ej.: ficheros).
- Está basado en el motor v8 de Google Chrome, opensource, escrito en C++.
- Se pueden realizar tareas como bots, automatización de tareas, servidores externos, etc.
- Cuenta con una enorme cantidad de librerías. (Ej.: librerías de encriptado de passwords, creación de servidores)

## Cómo funciona

- Nos permite crear servidores mucho más rápidos que los que se podrían generar, por ejemplo, con Apache. Con menor número de máquinas nos permite gestionar el mismo número de peticiones.
- Node permite la ejecución asíncrona de todas sus tareas en un solo hilo. Las tareas se colocan en un pool de peticiones y se van ejecutando sin esperar a que se terminen de ejecutar el resto. En servidores como Apache, las peticiones se ejecutan una a una, creando hilos diferentes, y esperando a que se ejecute la anterior.

## Organización

- Las organizaciones de código dentro de Node se realizan a través de módulos. Los módulos son el equivalente a las librerías o los paquetes de código en otros lenguajes.
- Se dispone del gestor NPM para instalar módulos desarrollados por terceros.
- Se pueden importar módulos propios o externos a través de la sentencia **require()**
    let http = require('http');
  - Es necesario crear tanto una exportación como una importación.
  
    - ```modules.export = {  mult:multiplicacion,  suma:suma }```
    - ``let operaciones = require('./operaciones);  console.log(operaciones.mult(2,3));  console.log(operaciones.suma(2,3));``
  - Se pueden crear exportaciones de toda una clase.

## Node Core

- Herramientas básicas que contiene node sin necesidad de módulos externos
- Namespace **global** donde se encuentran muchas de las estructuras básicas que se van a usar a lo largo de las aplicaciones. Se puede utilizar para crear variables globales.
- Un ejemplo es el console.log(); que se podría utilizar como global.console.log();
- Existen una serie de variables globales que pueden resultar interesantes:
  - **__dirname** - Devuelve la ruta del directorio donde estamos trabajando
  - **__filename** - Devuelve la ruta del fichero donde estamos trabajando.
- **Process**. Node se puede utilizar para crear scripts y pasarle parámetros en la ejecución.
  - ```node script.js param1 param2```
  - Dentro de esta librería se encuentra setInterval y setTimeout
- **SocketIo**. Librería para intercambiar información a tiempo real entre diferentes clientes / servidores. Chats, notificaciones, etc
- **EventEmitter**. Permite lanzar nuestros propios eventos a los que nos podemos suscribir
- **ChildProcess**. Procesos Externos. Permite lanzar un evento externo a Nodejs.
  - ```var exec = require('child_process').exec;  exec('open http://www.google.es);```

## File System

Implementa todas las acciones disponibles para el trabajo con ficheros. La mayoría de sus métodos cuentan tanto con versión síncrona como asíncrona.
  - readdir - Ver los ficheros dentro de un directorio
  - readFile - Leer un fichero
  - appendFile - Escriben un fichero.
  - unlink - Elimina un fichero
  - mkdir - Crea directorios; si el directorio existe, devuelve un error.
    - existsSync - Comprueba si existe un directorio.
    - rmdir - Elimina un directorio

### Streams

- Permiten manejar un flujo constante de lectura de datos. Dos ejemplos de streams podrían ser **stdin** y **stdout**.
- Pueden ser de lectura, de escritura o ambos.
- Nos permiten trabajar con ficheros de datos binarios o con texto en UTF-8
- Si leemos el contenido con readFile, al almacenarse el resultado en una variable, puede dar problemas si trabajamos con ficheros muy grandes. El uso de streams y capturar diferentes eventos permite solventar este problema.

## HTTPS Servers

- Node puede generar servidores a través del módulo **http**. Es preferible realizarlo con librerías externas.
- Petición HTTP
  - Método / Method: GET, POST, PUT, DELETE, PATCH, ...
  - URL
  - Cabecera / Headers
  - Cuerpo / Body
- Respuesta HTTP
  - Status
  - Headers

# ExpressJs

- Módulo en npm.
- Crearlo con express nombreproyecto
  - npm install
  - npm start
- Comunicación a través del protocolo HTTP.
- **Nodemon** módulo que permite que el servidor se recargue automáticamente.
  - Permite reiniciar a mano con "rs"
  - ```npm run startdev```
