const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');



const rutasLimonera = require('./routes/limonera');
const rutasUsers = require('./routes/users');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'DNAJNDAJSNXMM6W5DA9D6SD458EAD456SXA,OALÑASDKIOAWMIM4', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.get('/Arbol', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'arbol.html'));
});

app.use('/limonera', rutasLimonera);
app.use('/users',rutasUsers);




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