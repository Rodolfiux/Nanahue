const express = require('express');

const router = express.Router();

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