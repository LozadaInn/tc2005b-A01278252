const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const isAuth = require('../middleware/is-auth');

router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.post('/logout', isAuth, authController.postLogout);

router.get('/', isAuth, (request, response, next) => {
    response.render('index', {
        username: request.session.user.username
    });
});

module.exports = router;
