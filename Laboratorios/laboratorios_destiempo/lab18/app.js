const express = require('express');
const session = require('express-session');
const csrf = require('csurf');
const flash = require('connect-flash');
const app = express();

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

// Configuración de CSRF
const csrfProtection = csrf();
app.use(csrfProtection);

// Middleware para pasar el token CSRF a las vistas
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

// Rutas
const routes = require('./routes/routes');
app.use(routes);

// Middleware para proteger rutas
const isAuth = require('./middleware/is-auth');

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
