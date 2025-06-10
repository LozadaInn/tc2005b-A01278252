// ---------------------------
// Ejercicio 1
// ---------------------------
function ejercicio1() {
    let num = parseInt(prompt("Introduce un número válido"));
    if (isNaN(num) || num < 1) {
        alert("Introduce un número válido mayor a 0.");
        return;
    }
    document.write("<h2>Tabla de números, cuadrados y cubos</h2>");
    document.write("<table border='1' cellpadding='5'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
    for (let i = 1; i <= num; i++) {
        document.write(`<tr><td>${i}</td><td>${i ** 2}</td><td>${i ** 3}</td></tr>`);
    }
    document.write("</table>");
}

// ---------------------------
// Ejercicio 2
// ---------------------------
function ejercicio2() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const start = Date.now();
    const respuesta = parseInt(prompt(`¿Cuánto es ${a} + ${b}?`));
    const end = Date.now();
    const correcto = (respuesta === a + b);
    const tiempo = ((end - start) / 1000).toFixed(2);

    document.write(`<h2>Resultado</h2>`);
    document.write(`<p>${correcto ? "¡Correcto!" : "Incorrecto."}</p>`);
    document.write(`<p>Tiempo de respuesta: ${tiempo} segundos</p>`);
}

// ---------------------------
// Ejercicio 3
// ---------------------------
function contador(arr) {
    return arr.reduce((acc, num) => {
        num < 0 ? acc.negativos++ : num === 0 ? acc.ceros++ : acc.positivos++;
        return acc;
    }, { negativos: 0, ceros: 0, positivos: 0 });
}

// Prueba automatizada
console.assert(JSON.stringify(contador([-2, 0, 4, -1, 3, 0])) === JSON.stringify({ negativos: 2, ceros: 2, positivos: 2 }));

// ---------------------------
// Ejercicio 4
// ---------------------------
function promedios(matriz) {
    return matriz.map(row => {
        if (!row.every(num => typeof num === 'number' && !isNaN(num))) {
            throw new Error("La matriz debe contener solo números válidos.");
        }
        const suma = row.reduce((a, b) => a + b, 0);
        return suma / row.length;
    });
}

// Prueba automatizada
console.assert(JSON.stringify(promedios([[1, 2, 3], [4, 5, 6]])) === JSON.stringify([2, 5]));

// ---------------------------
// Ejercicio 5
// ---------------------------
function inverso(num) {
    return num.toString().split('').reverse().join('');
}

// Prueba automatizada
console.assert(inverso(12345) === "54321");

// ---------------------------
// Ejercicio 6
// ---------------------------
function ejercicio6() {
    class Deportista {
        constructor(nombre, deporte) {
            this.nombre = nombre;
            this.deporte = deporte;
        }

        presentarse() {
            return `Hola, soy ${this.nombre} y practico ${this.deporte}.`;
        }

        cambiarDeporte(nuevoDeporte) {
            this.deporte = nuevoDeporte;
            return `Ahora practico ${this.deporte}.`;
        }
    }

    const inaki = new Deportista("Iñaki", "pádel");
    const salida = `
        <h2>Ejercicio 6</h2>
        <p>${inaki.presentarse()}</p>
        <p>${inaki.cambiarDeporte("buceo")}</p>
    `;
    document.body.innerHTML += salida;
}

// ---------------------------
// Preguntas Teóricas
// ---------------------------
function preguntasTeoricas() {
    const respuestas = `
        <section>
        <h2>Preguntas Teóricas</h2>
        <h3>¿Qué diferencias y semejanzas hay entre Java y JavaScript?</h3>
        <p>Java es un lenguaje de programación orientado a objetos utilizado en aplicaciones empresariales. JavaScript es un lenguaje de scripting que se ejecuta en navegadores web y permite interactividad.</p>
        
        <h3>¿Qué métodos tiene el objeto Date? (Menciona al menos 5)</h3>
        <ul>
            <li>getDate()</li>
            <li>getDay()</li>
            <li>getMonth()</li>
            <li>getFullYear()</li>
            <li>getHours()</li>
        </ul>

        <h3>¿Qué métodos tienen los arreglos? (Menciona al menos 5)</h3>
        <ul>
            <li>push()</li>
            <li>pop()</li>
            <li>shift()</li>
            <li>unshift()</li>
            <li>map()</li>
        </ul>

        <h3>¿Cómo se declara una variable con alcance local dentro de una función?</h3>
        <p>Se declara usando <code>let</code> o <code>const</code> dentro de una función.</p>

        <h3>¿Qué implicaciones tiene utilizar variables globales dentro de funciones?</h3>
        <p>Puede causar conflictos si varias funciones modifican la misma variable, lo que puede generar errores difíciles de detectar y mantener.</p>
        </section>
    `;
    document.body.innerHTML += respuestas;
}