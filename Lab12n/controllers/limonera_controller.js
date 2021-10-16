
const Limon = require('../models/limones');



exports.getlist = (request, response, next) => {
    console.log(request.get('Cookie'));
    console.log(request.get('Cookie').split(';')[1].trim().split('=')[1]);
    response.render('lista_arbol',{
        titulo: "Limones",
        lista_limones: Limon.fetchAll(),

    });
};

exports.getadd = (request, response, next) => {
    

     response.render('add_limones',{

     });

};

exports.postadd = (request, response, next) => {
    
    console.log(request.body);
    console.log(request.body.nombre);
    response.setHeader('Set-Cookie', 'ultimo_limon='+request.body.nombre);
    const limon = new Limon(request.body.nombre, request.body.descripcion, "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/05/como-plantar-un-arbol-de-limones-en-casa.jpg" );
    limon.save();   
    response.status(302).redirect('/limonera/list');
};