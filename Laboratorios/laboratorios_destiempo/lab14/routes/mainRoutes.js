// routes/mainRoutes.js
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Rutas
router.get('/', mainController.index);
router.get('/formulario', mainController.formulario);
router.post('/resultado', mainController.resultado);
router.get('/ruta1', (req, res) => res.send('Respuesta de Ruta 1'));
router.get('/ruta2', (req, res) => res.send('Respuesta de Ruta 2'));
router.get('/set-cookie', mainController.setCookie);
router.get('/get-cookie', mainController.getCookie);
router.get('/set-session', mainController.setSession);
router.get('/logout', mainController.logout);

module.exports = router;
