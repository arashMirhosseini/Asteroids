const Asteroid = require("./asteroid.js");
const Util = require("./util.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js");

function Game() {
  this.DIM_X = 1000;
  this.DIM_Y = 600;
  this.NUM_ASTEROIDS = 0;
  this.addAsteroids = this.addAsteroids.bind(this);
  this.asteroids = [];
  this.bullets = [];
  this.ships = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    const pos = this.randomPosition();
    const asteroid = new Asteroid({ pos: pos, game: this });
    this.add(asteroid);
  }
}

Game.prototype.add = function(obj) {
  if (obj instanceof Asteroid) {
    this.asteroids.push(obj);
  } else if (obj instanceof Bullet) {
    this.bullets.push(obj)
  } else {
    this.ships.push(obj);
  }
}

Game.prototype.addShip = function() {
  const ship = new Ship({ pos: this.randomPosition(), game: this });
  this.add(ship);
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

Game.prototype.remove = function(obj) {
  if (obj instanceof Asteroid) {
    this.NUM_ASTEROIDS--;
    const indexAsteroid = this.asteroids.indexOf(obj);
    this.asteroids.splice(indexAsteroid, 1);
  } else {
    const indexBullet = this.bullets.indexOf(obj);
    this.bullets.splice(indexBullet, 1);    
  }
}

Game.prototype.allObjects = function() {
  return this.asteroids.concat(this.ships).concat(this.bullets);
}

Game.prototype.isOutOfBounds = function(pos) {
  return (
    pos[0] < 0 ||
    pos[0] > this.DIM_X ||
    pos[1] < 0 ||
    pos[1] > this.DIM_Y
  );
}

module.exports = Game;