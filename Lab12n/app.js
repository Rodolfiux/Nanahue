const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const rutasLimonera = require('./routes/limonera');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/Arbol', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'arbol.html'));
});

app.use('/limonera', rutasLimonera);




//Middleware
app.use((request, response, next) => {
    console.log('Primer Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});



app.use((request, response, next) => {
    console.log('Segundo middleware!');
    response.status(404).send('ERROR 404'); //Manda la respuesta
});



app.listen(3000);