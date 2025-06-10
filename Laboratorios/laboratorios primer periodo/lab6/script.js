// Array global para almacenar las contraseñas creadas
let savedPasswords = [];

// Función para crear una nueva contraseña
function createPassword(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

    // Obtiene el valor de la nueva contraseña del campo de entrada
    let newPassword = document.getElementById("newPassword").value;
    
    // Verifica si la contraseña tiene al menos 8 caracteres
    if (newPassword.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return; // Sale de la función si la contraseña es demasiado corta
    }
    
    // Agrega la nueva contraseña al array de contraseñas guardadas
    savedPasswords.push(newPassword);

    // Limpia el campo de entrada
    document.getElementById("newPassword").value = "";

    // Muestra un mensaje de éxito
    alert("Contraseña creada correctamente.");
}

// Función para validar una contraseña existente
function validatePassword(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

    // Obtiene el valor de la contraseña ingresada para validar
    let inputPassword = document.getElementById("inputPassword").value;

    // Obtiene el elemento donde se mostrará el resultado
    let result = document.getElementById("result");
    
    // Verifica si la contraseña ingresada existe en el array de contraseñas guardadas
    if (savedPasswords.includes(inputPassword)) {
        // Si la contraseña existe, muestra un mensaje de éxito
        result.textContent = "La contraseña existe y es correcta.";
        result.style.color = "green"; // Cambia el color del texto a verde
    } else {
        // Si la contraseña no existe, muestra un mensaje de error
        result.textContent = "La contraseña no existe.";
        result.style.color = "red"; // Cambia el color del texto a rojo
    }
    
    // Limpia el campo de entrada
    document.getElementById("inputPassword").value = "";
}

// Agrega eventos de escucha a los formularios para manejar la creación y validación de contraseñas
document.getElementById("createForm").addEventListener("submit", createPassword);
document.getElementById("validateForm").addEventListener("submit", validatePassword);
