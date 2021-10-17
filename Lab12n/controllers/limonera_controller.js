
const session = require('express-session');
const Limon = require('../models/limones');



exports.getlist = (request, response, next) => {
    console.log(request.get('Cookie'));
    console.log(request.cookies);
    console.log(request.cookies.ultimo_limon);
    Limon.fetchAll(request.params.limon_id)
    .then(([rows, fieldData]) => {
        //console.log(rows);
        response.render('lista_arbol',{
            titulo: "Limones",
            isLoggedIn: request.session.isLoggedIn,
            username: request.session.username,
            lista_limones: rows,
    
        });
        
    })
    .catch(err => {
        console.log(err);

    });
    
};



exports.getadd = (request, response, next) => {
    

     response.render('add_limones',{
         titulo: "Iniciar session",
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
     });

};

exports.postadd = (request, response, next) => {
    
    console.log(request.body);
    console.log(request.body.nombre);
    response.setHeader('Set-Cookie', 'ultimo_limon='+request.body.nombre+';HttpOnly');
    const limon = new Limon(request.body.nombre, request.body.descripcion, "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/05/como-plantar-un-arbol-de-limones-en-casa.jpg" );
    limon.save()
    .then(() => {
        response.status(302).redirect('/limonera/list');
        
    })
    .catch(err => {
        console.log(err);

    });  
    
};