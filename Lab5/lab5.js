const numero = window.prompt("Ingresa un numero: ");
document.write("<h2>Ejercicio 1: </h2>")
for(var i = 1; i<= numero; i++){
	document.write("<table><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr><tr><td>"+ i +"</td><td>"+ i**2 +"</td><td>"+ i**3 +"</td></tr></table></table>");
}

let num1= Math.round(Math.random()*100);
let num1= Math.round(Math.random()*100);
let tiempo_incial = new Date();
let tiempo_total;

const r = num1 + num2;
const resultado_usuario = window.prompt("Ingrese el resultado de las suma entre " num1 + "+" + num2);

if(resultado == parseInt(resultado_usuario)){
    let tiempo_final = new Date();
    tiempo_total = (tiempo_final - tiempo_incial)/1000
    document.write("Correcto" + num1 + "+" + num2 + " es " + resultado + "!" + ", Tardaste: " + tiempo_total + " ");
}
else{
    let tiempo_final = new Date();
    tiempo_total = (tiempo_final - tiempo_incial)/1000;
    document.write("Incorrecto" + num1 + "+" + num2 + " es " + resultado + "!" + ", Tardaste: " + tiempo_total + " ");

}

function promedioArr(){
   
    function promedio(array){
        let tmp = 0;

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                tmp += array[i][j];
            }
            console.log("El promedio de arreglo " + (i+1) + " es: " + (tmp / 3) + ".");
        }
    }

    let arr = [[1,2,3], [4,5,6], [7,8,9]];
    console.log("Arreglo a promediar: " + arr);
    promedio(arr);

    let arra = [[10,20,30], [40,50,60], [70,80,90]];
    console.log("Segundo Arreglo: " + arra);
    promedio(arra);


}