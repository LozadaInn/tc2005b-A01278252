// routes/main.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Ruta principal
router.get('/', (req, res) => {
    res.render('index');
});

// Ruta para el formulario
router.get('/formulario', (req, res) => {
    res.render('formulario');
});

// Ruta para manejar el envío del formulario
router.post('/resultado', (req, res) => {
    const datos = req.body.dato;
    fs.appendFileSync(path.join(__dirname, '..', 'data.txt'), `${datos}\n`);
    res.render('resultado', { dato: datos });
});

// Otras rutas
router.get('/ruta1', (req, res) => {
    res.send('Respuesta de Ruta 1');
});

router.get('/ruta2', (req, res) => {
    res.send('Respuesta de Ruta 2');
});

// Más rutas según sea necesario...

module.exports = router;
