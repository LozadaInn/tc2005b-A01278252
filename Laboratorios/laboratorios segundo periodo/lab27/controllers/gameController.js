const Game = require('../models/Game');
let game = new Game();

exports.createGame = (req, res) => {
    game = new Game();
    res.status(200).json({ message: 'Nuevo juego creado exitosamente' });
};

exports.getGameStatus = (req, res) => {
    res.status(200).json({
        state: game.state,
        currentTurn: game.currentTurn,
        players: game.players
    });
};

exports.dice = (req, res) => {
    if (game.state !== 'SETEANDO') {
        return res.status(400).json({ message: 'El juego no está en estado SETEANDO' });
    }
    const startingPlayer = Math.random() < 0.5 ? 1 : 2;
    res.status(200).json({ startingPlayer });
};

exports.setShips = (req, res) => {
    const player = parseInt(req.params.player);
    if (game.state !== 'SETEANDO') {
        return res.status(400).json({ message: 'El juego no está en estado SETEANDO' });
    }
    if (![1, 2].includes(player)) {
        return res.status(400).json({ message: 'Número de jugador no válido' });
    }
    game.setShips(player, req.body.ships);
    res.status(200).json({ message: 'Posiciones de barcos aceptadas' });
};

exports.turn = (req, res) => {
    const { player, attack } = req.body;
    if (game.state !== 'JUGANDO') {
        return res.status(400).json({ message: 'El juego no está en estado JUGANDO' });
    }
    const result = game.attack(player, attack.x, attack.y);
    res.status(200).json(result);
};

exports.getPlayerInfo = (req, res) => {
    const playerNumber = parseInt(req.params.playerNumber);
    if (![1, 2].includes(playerNumber)) {
        return res.status(400).json({ message: 'Número de jugador no válido' });
    }
    res.status(200).json(game.players[playerNumber]);
};
