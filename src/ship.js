const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

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

Ship.RADIUS = 15;

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
}

Ship.prototype.power = function(impulse) {
  console.log(impulse);
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
}



module.exports = Ship;