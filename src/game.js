const Asteroid = require("./asteroid.js");

function Game() {
  this.DIM_X = 1000;
  this.DIM_Y = 600;
  this.NUM_ASTEROIDS = 30;
  this.addAsteroids = this.addAsteroids.bind(this);
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    const pos = this.randomPosition();
    const asteroid = new Asteroid({ pos: pos, game: this });
    this.asteroids.push(asteroid);
  }

}

Game.prototype.randomPosition = function() {
  const xPos = Math.random() * this.DIM_X;
  const yPos = Math.random() * this.DIM_Y;
  return [xPos, yPos];
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.asteroids.forEach((asteroid) => {
    asteroid.draw(ctx);
  });
}

Game.prototype.moveObjects = function() {
  this.asteroids.forEach((asteroid) => {
    asteroid.move();
  });
}

Game.prototype.wrap = function(pos) {
  return [-pos[0], -pos[1]];
}

module.exports = Game;