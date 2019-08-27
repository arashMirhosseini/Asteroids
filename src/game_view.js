const Game = require("./game.js");

function GameView(ctx) {
  this.ctx = ctx;
  this.game = new Game();
  this.ship = this.game.addShip();
  this.lastTime = 0;
}

GameView.MOVES = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
};

GameView.prototype.bindKeyHandlers = function () {
  const ship = this.ship;
  Object.keys(GameView.MOVES).forEach((k) => {
    key(k, () => ship.power(GameView.MOVES[k]));
  });
  key("space", () => ship.fireBullet());
};

GameView.prototype.start = function() {
  this.bindKeyHandlers();
  requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.animate = function(time) {
  const timeDelta = time - this.lastTime;
  this.game.step(timeDelta);
  this.game.draw(this.ctx);

  requestAnimationFrame(this.animate.bind(this));
};


module.exports = GameView;