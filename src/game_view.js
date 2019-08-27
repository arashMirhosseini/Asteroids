const Game = require("./game.js");

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
  this.ship = this.game.addShip();
}

GameView.MOVES = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
};

GameView.prototype.start = function() {
  setInterval(() => {
    this.game.step();
    this.game.draw(this.ctx);
  }, 20);
  this.bindKeyHandlers();
}

GameView.prototype.bindKeyHandlers = function() {
  const ship = this.ship;
  Object.keys(GameView.MOVES).forEach((k) => {
    key(k, () => ship.power(GameView.MOVES[k]));
  });
  key('space', () => ship.fireBullet());
}

module.exports = GameView;