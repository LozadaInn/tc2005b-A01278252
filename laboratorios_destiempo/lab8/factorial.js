function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Ejemplo de uso
const numero = 5;
console.log(`El factorial de ${numero} es: ${factorial(numero)}`);
