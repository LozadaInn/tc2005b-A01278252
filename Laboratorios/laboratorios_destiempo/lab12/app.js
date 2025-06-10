// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mainRoutes = require('./routes/main');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
app.use('/', mainRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).send('404: Página no encontrada');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
