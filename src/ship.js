const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Bullet = require("./bullet.js");

function randomColor() {
  const hexDigits = "0123456789ABCDEF";

  let color = "#";
  for (let i = 0; i < 3; i++) {
    color += hexDigits[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Ship(options) {
  options.radius = Ship.RADIUS;
  options.color = options.color || randomColor();
  options.vel = options.vel || [0, 0];

  MovingObject.call(this, options);
}

Ship.RADIUS = 10;

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
}

Ship.prototype.power = function(impulse) {
  // console.log(impulse);
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
}

Ship.prototype.fireBullet = function() {
  const bullet = new Bullet(
    { vel: this.vel,
      pos: this.pos,
      game: this.game,
      color: randomColor()
    }
  );
  this.game.add(bullet);
}

module.exports = Ship;