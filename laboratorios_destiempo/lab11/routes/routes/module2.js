// Archivo: routes/module2.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataFilePath = path.join(__dirname, '../data.txt');

// Ruta 3: Formulario para enviar datos
router.get('/form', (req, res) => {
  res.send(`
    <form action="/module2/save-data" method="POST">
      <label for="data">Ingresa algún dato:</label>
      <input type="text" id="data" name="data" required>
      <button type="submit">Enviar</button>
    </form>
  `);
});

// Ruta 4: Guardar datos enviados por POST
router.post('/save-data', (req, res) => {
  const userData = req.body.data;
  fs.appendFileSync(dataFilePath, `${userData}\n`, 'utf-8');
  res.send('Datos guardados correctamente.');
});

// Ruta 5
router.get('/ruta3', (req, res) => {
  res.send('Respuesta de la ruta 3 en el módulo 2.');
});

module.exports = router;