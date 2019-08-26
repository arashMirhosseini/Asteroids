const Asteroid = require("./asteroid.js");

function Game(dimX, dimY, numAsteroids) {
  this.DIM_X = dimX;
  this.DIM_Y = dimY;
  this.NUM_ASTEROIDS = numAsteroids;
  this.addAsteroids = this.addAsteroids.bind(this);
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  
  for (let i = 0; i < this.NUM_ASTEROIDS.length; i++) {
    const pos = this.randomPosition();
    const asteroid = new Asteroid({ pos: pos });
    this.asteroids.push(asteroid);
  }

}

Game.prototype.randomPosition = function() {
  const xPos = Math.random() * this.DIM_X;
  const yPos = Math.random() * this.DIM_Y;
  return [xPos, yPos];
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect();
  this.asteroids.forEach((asteroid) => {
    asteroid.draw(ctx);
  });
}

Game.prototype.moveObjects = function() {
  this.asteroids.forEach((asteroid) => {
    asteroid.move();
  });
}

module.exports = Game;