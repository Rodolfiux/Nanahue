const { request, response } = require('express');
const express = require('express');

const router = express.Router();

const limones = [
    {nombre: "Limon agrio", descripcion:"Muy agrio",imagen: "https://ojo.pe/resizer/sf4bkkPAxXsqBwnCMRFu5IhMkU4=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/HPV7XJCGXNCE5OQIC2FX2667Q4.jpg"},
    {nombre: "Limon persa", descripcion:"De persa",imagen: "https://fagro.mx/img/cultivos/limn-persa.png"},
    {nombre: "Limon sin semilla", descripcion:"No tiene semilla", imagen: "https://storage.googleapis.com/portalfruticola/2019/11/630ac7b6-limones-adobestock_59907799-1024x761.jpeg"}
];

router.get('/list', (request, response, next) => {
    response.render('lista_arbol',{
        titulo: "Limones",
        lista_limones: limones

    });
});

router.get('/agregar', (request, response, next) => {
    let respuesta = '<head><meta charset="UTF-8"></head>';
    respuesta +='<h1>Agregar Limones al arbol</h1>';
    respuesta +='<form action="/limonera/agregar" method="POST">';
    respuesta +='<label for="nombre">Tipo de Limon: </label>';
    respuesta +='<input type="text" id="tipo" name="tipo" placeholder="Limon Persa" required>';
    respuesta +='<br/>';
    respuesta +='<br/>';
    respuesta +='<label for="descripcion">Descripción del limon: </label>';
    respuesta +='<input type="text" id="descripcion" name="descripcion" placeholder="Es un limon de origen...">';
    respuesta +='<br/>';
    respuesta +='<br/>';
    respuesta +='<input type="submit" id="enviar" name="enviar" value="Enviar">';
    respuesta +='</form>';
    response.send(respuesta);
});

router.post('/agregar', (request, response, next) => {
    console.log(request.body);
    response.send("Gracias");
});

module.exports = router;