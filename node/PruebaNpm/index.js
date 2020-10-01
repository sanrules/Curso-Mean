const chalk = require('chalk');
const axios = require('axios');

console.log(chalk.green.bgGray('Hola NPM!'));

// https://restcountries.eu/rest/v2/region/europe
axios.get('https://restcountries.eu/rest/v2/region/europe')
    .then((response) => {
        console.log(response);
        const nombresPais = response.data.map(pais => pais.name);
        console.log(nombresPais);
    })
    .catch((error) => {
        console.log(chalk.bgRed(error));
    })