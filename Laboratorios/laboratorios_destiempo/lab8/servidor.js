const http = require('http');

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola, este es mi servidor web!');
});

const PORT = 3000;
servidor.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
