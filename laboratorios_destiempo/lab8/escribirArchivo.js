const fs = require('fs');

function escribirEnArchivo(nombreArchivo, contenido) {
    fs.writeFile(nombreArchivo, contenido, (err) => {
        if (err) {
            console.error('Error al escribir en el archivo', err);
        } else {
            console.log('Archivo escrito con éxito');
        }
    });
}

// Ejemplo de uso
escribirEnArchivo('miArchivo.txt', 'Este es el contenido del archivo.');
