const express = require('express');
const app = express();
const port = 3000;

// Ruta principal
app.get('/', (req, res) => {
    res.send(`
        <h1>Bienvenido a mi aplicación web</h1>
        <script>
            window.onload = function() {
                alert("Los comandos son: /promedio y /minimo.");
            };
        </script>
    `);
});

// Ruta para el promedio
app.get('/promedio', (req, res) => {
    const numeros = [10, 20, 30];
    const promedio = numeros.reduce((acc, num) => acc + num, 0) / numeros.length;
    res.send(`<h2>El promedio es: ${promedio}</h2>`);
});

// Ruta para el mínimo
app.get('/minimo', (req, res) => {
    const numeros = [10, 20, 30];
    const min = Math.min(...numeros);
    res.send(`<h2>El mínimo es: ${min}</h2>`);
});

// Manejo de rutas no existentes
app.use((req, res) => {
    res.status(404).send('<h2>404 - Ruta no encontrada</h2>');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
