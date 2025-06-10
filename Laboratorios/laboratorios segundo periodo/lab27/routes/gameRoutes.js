const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/create', gameController.createGame);
router.get('/status', gameController.getGameStatus);
router.get('/dice', gameController.dice);
router.post('/create/:player', gameController.setShips);
router.post('/turn', gameController.turn);
router.get('/player/:playerNumber', gameController.getPlayerInfo);

module.exports = router;
