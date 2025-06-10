class Game {
    constructor() {
        this.state = 'SETEANDO'; // Estados: SETEANDO, JUGANDO, FINALIZADO
        this.currentTurn = null;
        this.players = {
            1: { ships: [], hits: [], misses: [] },
            2: { ships: [], hits: [], misses: [] }
        };
    }

    setShips(player, ships) {
        this.players[player].ships = ships;
        if (this.players[1].ships.length > 0 && this.players[2].ships.length > 0) {
            this.state = 'JUGANDO';
            // Determinar quién inicia (aquí puedes implementar la lógica del dado)
            this.currentTurn = 1; // Ejemplo: Jugador 1 inicia
        }
    }

    attack(player, x, y) {
        if (this.state !== 'JUGANDO' || this.currentTurn !== player) {
            return { success: false, message: 'No es tu turno o el juego no está en estado JUGANDO' };
        }

        const opponent = player === 1 ? 2 : 1;
        const hit = this.checkHit(opponent, x, y);

        if (hit) {
            this.players[opponent].hits.push({ x, y });
            // Verificar si todos los barcos del oponente han sido destruidos
            if (this.checkAllShipsDestroyed(opponent)) {
                this.state = 'FINALIZADO';
                return { success: true, hit, message: '¡Todos los barcos del oponente han sido destruidos! Juego terminado.' };
            }
            // Si golpea, puede atacar nuevamente
            return { success: true, hit, message: '¡Golpe! Puedes atacar nuevamente.' };
        } else {
            this.players[opponent].misses.push({ x, y });
            // Cambiar turno
            this.currentTurn = opponent;
            return { success: true, hit, message: 'Fallo. Turno del oponente.' };
        }
    }

    checkHit(player, x, y) {
        return player.ships.some(ship =>
            ship.positions.some(pos => pos[0] === x && pos[1] === y)
        );
    }

    checkAllShipsDestroyed(player) {
        const allPositions = player.ships.flatMap(ship => ship.positions);
        return allPositions.every(pos =>
            player.hits.some(hit => hit.x === pos[0] && hit.y === pos[1])
        );
    }
}

module.exports = Game;
