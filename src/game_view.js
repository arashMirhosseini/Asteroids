const Game = require("./game.js");

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  setInterval(() => {
    this.game.step();
    this.game.draw(this.ctx);
  }, 20);
  this.bindKeyHandlers();
}

GameView.prototype.bindKeyHandlers = function() {
  const that = this;
  key('w', function() {
    that.game.ship.power([10, 10]);
  });
  
}

module.exports = GameView;