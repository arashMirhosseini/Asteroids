const Asteroid = require("./asteroid.js");
const Util = require("./util.js");

function Game() {
  this.DIM_X = 1000;
  this.DIM_Y = 600;
  this.NUM_ASTEROIDS = 4;
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
  return [Util.wrap(pos[0], this.DIM_X), Util.wrap(pos[1], this.DIM_Y)];
}

Game.prototype.checkCollisions = function() {
  for (let i = 0; i < this.asteroids.length; i++) {
    const asteroid1 = this.asteroids[i];
    for (let j = i + 1; j < this.asteroids.length; j++) {
      const asteroid2 = this.asteroids[j];
      if (asteroid1.isCollideWith(asteroid2)) {
        // alert("COLLISION");
        console.log("collision");
        return true;
      }
    }
  }
  return false;
}

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
}

module.exports = Game;