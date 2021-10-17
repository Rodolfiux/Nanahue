const db = require('../util/database');




const limones = [
    {nombre: "Limon agrio", descripcion:"Muy agrio",imagen: "https://ojo.pe/resizer/sf4bkkPAxXsqBwnCMRFu5IhMkU4=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/HPV7XJCGXNCE5OQIC2FX2667Q4.jpg"},
    {nombre: "Limon persa", descripcion:"De persa",imagen: "https://fagro.mx/img/cultivos/limn-persa.png"},
    {nombre: "Limon sin semilla", descripcion:"No tiene semilla", imagen: "https://storage.googleapis.com/portalfruticola/2019/11/630ac7b6-limones-adobestock_59907799-1024x761.jpeg"}
];




module.exports = class Limon {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_descripcion, mi_imagen) {
        this.nombre = mi_nombre;
        this.descripcion=mi_descripcion;
        this.imagen=mi_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO limones (nombre, descripcion, imagen) VALUES (?, ?, ?)',
        [this.nombre, this.descripcion, this.imagen]);
        
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll(id) {
        if (id == undefined) {
            return db.execute('SELECT * FROM limones');
        } else {
            return db.execute('SELECT * FROM limones WHERE id = ?', [id]);
        }
        
        
        
    }

}