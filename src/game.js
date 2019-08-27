const Asteroid = require("./asteroid.js");
const Util = require("./util.js");
const Ship = require("./ship.js");

function Game() {
  this.DIM_X = 1000;
  this.DIM_Y = 600;
  this.NUM_ASTEROIDS = 5;
  this.addAsteroids = this.addAsteroids.bind(this);
  this.asteroids = [];
  this.addAsteroids();
  this.addShip = this.addShip.bind(this);
  this.ship = this.addShip();
}

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    const pos = this.randomPosition();
    const asteroid = new Asteroid({ pos: pos, game: this });
    this.asteroids.push(asteroid);
  }
}

Game.prototype.addShip = function() {
  const ship = new Ship({ pos: this.randomPosition(), game: this });
  return ship;
}

Game.prototype.randomPosition = function() {
  const xPos = Math.random() * this.DIM_X;
  const yPos = Math.random() * this.DIM_Y;
  return [xPos, yPos];
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  const allObj = this.allObjects();
  allObj.forEach((obj) => {
    obj.draw(ctx);
  });
}

Game.prototype.moveObjects = function() {
  this.allObjects().forEach((obj) => {
    // console.log(obj);
    obj.move();
  });
}

Game.prototype.wrap = function(pos) {
  return [Util.wrap(pos[0], this.DIM_X), Util.wrap(pos[1], this.DIM_Y)];
}

Game.prototype.checkCollisions = function() {
  const allObjects = this.allObjects();
  for (let i = 0; i < allObjects.length; i++) {
    const object1 = allObjects[i];
    for (let j = i + 1; j < allObjects.length; j++) {
      const object2 = allObjects[j];
      if (object1.isCollideWith(object2)) {
        console.log(`number of asteroids: ${this.NUM_ASTEROIDS}`);
        object1.collideWith(object2);
      }
    }
  }
  return null;
}

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
}

Game.prototype.remove = function(asteroid) {
  this.NUM_ASTEROIDS--;
  const indexAsteroid = this.asteroids.indexOf(asteroid);
  this.asteroids.splice(indexAsteroid, 1);
}

Game.prototype.allObjects = function() {
  return this.asteroids.concat(this.ship);
}

module.exports = Game;