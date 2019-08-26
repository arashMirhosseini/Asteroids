const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 4
};

function Asteroid(posObj) {
  this.COLOR = DEFAULTS.COLOR;
  this.RADIUS = DEFAULTS.RADIUS;
  posObj.color = this.COLOR;
  posObj.radius = this.RADIUS;
  const pos = posObj.pos;
  const length = Math.sqrt(Math.pow(pos[0], 2) + Math.pow(pos[1], 2));
  const vel = Util.randomVec(DEFAULTS.SPEED);
  posObj.vel = vel;
  MovingObject.call(this, posObj);

}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
