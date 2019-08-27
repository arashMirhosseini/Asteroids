const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
// const Asteroid = require("./asteroid.js");

function Bullet(options) {
  options.radius = Bullet.RADIUS;
  MovingObject.call(this, options);
}

Bullet.RADIUS = 3;
Bullet.SPEED = 15;

Util.inherits(Bullet, MovingObject);

Bullet.prototype.collideWith = function(otherObject) {
  this.game.remove(otherObject);
}

module.exports = Bullet;