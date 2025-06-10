// Archivo principal: app.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

// Importar rutas desde los módulos
const routesModule1 = require('./routes/module1');
const routesModule2 = require('./routes/module2');

// Middleware para procesar datos enviados por POST
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware para servir archivos estáticos (opcional)
app.use(express.static(path.join(__dirname, 'public')));

// Usar los módulos de rutas
app.use('/module1', routesModule1);
app.use('/module2', routesModule2);

// Manejo de rutas no definidas (HTTP 404)
app.use((req, res) => {
  res.status(404).send('Página no encontrada (404).');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});

// Crear un archivo de texto para almacenar datos enviados por POST
const dataFilePath = path.join(__dirname, 'data.txt');
if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, '', 'utf-8');
}