const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const rutasLimonera = require('./routes/limonera');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/limonera', rutasLimonera);




//Middleware
app.use((request, response, next) => {
    console.log('Primer Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});



app.use((request, response, next) => {
    console.log('Segundo middleware!');
    response.status(404).send('No encontrado'); //Manda la respuesta
});



app.listen(3000);