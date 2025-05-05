// Archivo: routes/module1.js
const express = require('express');
const router = express.Router();

// Ruta 1
router.get('/ruta1', (req, res) => {
  res.send('Respuesta de la ruta 1 en el módulo 1.');
});

// Ruta 2
router.get('/ruta2', (req, res) => {
  res.send('Respuesta de la ruta 2 en el módulo 1.');
});

module.exports = router;