//Servidor Web
const campeones = [
    {nombre: "Draven", descripcion: "El mejor campeon de todo lol"},
    {nombre: "Qiyana", descripcion: "Una reina guerrera"},
    {nombre: "Sett", descripcion: "Un luchador dispuesto a pelear"},
    {nombre: "Taliya", descripcion: "Hija de surima"}
];

const requestHandler = (request, response) => {
    console.log(request.url);

    //Reaccionar de acuerdo a la ruta
    if (request.url === "/") {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>League of legends</h1>');
        response.write('<br>');
        response.write('<a href = "/juego" style="font-size: 25px">Historia</a>');
        response.write('<br><br>');
        response.write('<a href = "/torneos" style="font-size: 25px">Torneos</a>');
        response.write('<br><br>');
        response.write('<a href = "/campeones" style="font-size: 25px">Campeones</a>');
        response.write('<br><br>');
        response.write('</body>');
        response.end();
    } else if (request.url === "/torneos") {
        //Mostrar la lista de platillos
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>No hay actualmente</h1>');
        response.write('<ul>');
        response.end();
    } else if (request.url === "/juego") {
        //Mostrar la lista de platillos
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<a href = "https://www.leagueoflegends.com/es-mx/news/lore/" ">Historia lore</a>');
        response.write('<ul>');
        response.end();
    } else if (request.url === "/campeones") {
        //Mostrar la lista de platillos
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Campeones</h1>');
        response.write('<ul>');
        for (let campeon of campeones) {
            response.write('<li>' + campeon.nombre + ": " + campeon.descripcion + "</li>");
        }
        response.write("</ul>");
        response.write('<a href="/campeones/agregar">Agregar campeones</a>');
        response.end();
    } else if (request.url === "/campeones/agregar" && request.method === "GET") {
        console.log(request.method);
        //Agregar un platillo a la lista
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Ingresa un nuevo campeon</h1>');
        response.write('<form action="/menu/add" method="POST">');
        response.write('<label for="nombre">Nombre de campeon: </label>');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="Azir" required>');
        response.write('<br/>');
        response.write('<br/>');
        response.write('<label for="descripcion">Descripción del campeon: </label>');
        response.write('<input type="text" id="descripcion" name="descripcion" placeholder="Emperador de shurima">');
        response.write('<br/>');
        response.write('<br/>');
        response.write('<input type="submit" id="enviar" name="enviar" value="Enviar">');
        response.write('</form>');
        response.end();
    } else if (request.url === "/campeones/agregar" && request.method === "POST") {
        console.log(request.method);
        
        const datos = [];

        //Recibir datos del cliente
        request.on('data', (dato) => {
            //console.log(dato);
            datos.push(dato);
        });
        
        //Procesar los datos del cliente
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos);
            console.log(datos_completos);
            const nombre = datos_completos.split('=')[1].split('&')[0];
            const descripcion = datos_completos.split('=')[2].split('&')[0];
            console.log(nombre);
            console.log(descripcion);
            
            //Agregar el nuevo platillo
            campeones.push({nombre: nombre, descripcion: descripcion});

            //Redireccionar hacia /menu
            response.statusCode = 302;
            response.setHeader('Location', '/campeones');
            response.end();
        });

    }  else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Te perdiste? </h1>');
        response.write('<h1>Te perdiste? </h1>');
        response.end();
    }
}

//Exportar la variable
module.exports = requestHandler;