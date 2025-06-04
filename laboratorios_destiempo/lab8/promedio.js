function calcularPromedio(arreglo) {
    const suma = arreglo.reduce((acc, num) => acc + num, 0);
    return suma / arreglo.length;
}

// Ejemplo de uso
const numeros = [10, 20, 30, 40, 50];
console.log(`El promedio es: ${calcularPromedio(numeros)}`);
