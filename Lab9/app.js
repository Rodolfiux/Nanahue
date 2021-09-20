const arreglo = [2,4,6,8];
let suma=0;
let tamaño = arreglo.length;

for (let i of arreglo){
    suma= suma + i;

}
promedio=suma/tamaño;
console.log(promedio);

//--------
const file_system = require('fs');
file_system.writeFileSync("Lab9-txt","Que onda amigos, ya comieron?");
//-----
const nine = 9;
//--
const http = require('http');
const server = http.createServer((request, response) => {
    

    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("Hello its my");
    response.end();
})
server.listen(3000);

