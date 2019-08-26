const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 4
};

function Asteroid(options) {
  this.COLOR = DEFAULTS.COLOR;
  this.RADIUS = DEFAULTS.RADIUS;
  options.color = this.COLOR;
  options.radius = this.RADIUS;
  const vel = Util.randomVec(DEFAULTS.SPEED);
  options.vel = vel;
  MovingObject.call(this, options);

}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
