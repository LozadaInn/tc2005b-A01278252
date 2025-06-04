const User = require('../models/User');

exports.getRegister = (request, response, next) => {
    response.render('register', {
        errorMessage: request.flash('error')
    });
};

exports.postRegister = (request, response, next) => {
    const { username, password } = request.body;
    const user = new User(username, password);
    user.save()
        .then(() => {
            response.redirect('/login');
        })
        .catch(err => {
            console.log(err);
            request.flash('error', 'Error al registrar el usuario');
            response.redirect('/register');
        });
};

exports.getLogin = (request, response, next) => {
    response.render('login', {
        errorMessage: request.flash('error')
    });
};

exports.postLogin = (request, response, next) => {
    const { username, password } = request.body;
    User.findByUsername(username)
        .then(user => {
            if (!user) {
                request.flash('error', 'Usuario no encontrado');
                return response.redirect('/login');
            }
            User.comparePassword(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.user = user;
                        return request.session.save(err => {
                            response.redirect('/');
                        });
                    }
                    request.flash('error', 'Contraseña incorrecta');
                    response.redirect('/login');
                })
                .catch(err => {
                    console.log(err);
                    response.redirect('/login');
                });
        })
        .catch(err => {
            console.log(err);
            response.redirect('/login');
        });
};

exports.postLogout = (request, response, next) => {
    request.session.destroy(err => {
        response.redirect('/login');
    });
};
