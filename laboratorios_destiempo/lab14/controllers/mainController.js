// controllers/mainController.js
const path = require('path');
const fs = require('fs');

exports.index = (req, res) => {
    res.render('index');
};

exports.formulario = (req, res) => {
    res.render('formulario');
};

exports.resultado = (req, res) => {
    const dato = req.body.dato;
    
    // Guardar el dato en un archivo (opcional)
    fs.appendFileSync(path.join(__dirname, '..', 'data.txt'), `${dato}\n`);

    // Renderizar la vista con el dato
    res.render('resultado', { dato });
};

exports.setCookie = (req, res, next) => {
    res.setHeader('Set-Cookie', 'usuario=visitante; HttpOnly');
    res.send('Cookie establecida');
};

exports.getCookie = (req, res, next) => {
    const cookies = req.get('Cookie');
    res.send('Cookies recibidas: ' + cookies);
};

exports.setSession = (req, res, next) => {
    req.session.visitas = (req.session.visitas || 0) + 1;
    res.send('Sesión actual, visitas: ' + req.session.visitas);
};

exports.logout = (req, res, next) => {
    req.session.destroy(() => {
        res.send('Sesión eliminada');
    });
};
