const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//Middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Primer middleware!');
    console.log(request.body);
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/ruta/apellidos', (request, response, next) => {
    console.log('Apellido');
    response.send('Respuesta de la ruta "/ruta/apellido"'); 
});

app.use('/ruta/nombres', (request, response, next) => {
    console.log('Nombre!');
    response.send('Respuesta de la ruta "/ruta/nombre"'); 
});

app.use('/ruta', (request, response, next) => {
    console.log('Segundo middleware!');
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use((request, response, next) => {
    console.log('Segundo middleware!');
    response.send('No hay no exixte'); //Manda la respuesta
});
app.listen(3000);