const bcrypt = require('bcryptjs');

// Simulación de base de datos
const users = [];

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    static findByUsername(username) {
        // Devuelve una Promesa que resuelve con el usuario encontrado o null
        return new Promise((resolve, reject) => {
            const user = users.find(user => user.username === username);
            resolve(user);
        });
    }

    save() {
        // Devuelve una Promesa para el hash de la contraseña y el guardado del usuario
        return bcrypt.hash(this.password, 12)
            .then(hashedPassword => {
                this.password = hashedPassword;
                users.push(this);
                return this; // Devuelve el usuario guardado
            });
    }

    static comparePassword(password, hashedPassword) {
        // Devuelve una Promesa para la comparación de contraseñas
        return bcrypt.compare(password, hashedPassword);
    }
}

module.exports = User;
