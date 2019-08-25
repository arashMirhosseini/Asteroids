const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

function Asteroid(posObj) {
  this.COLOR = "#ff0000";
  this.RADIUS = 20;
  posObj.color = this.COLOR;
  posObj.radius = this.RADIUS;
  const pos = posObj.pos;
  const length = Math.sqrt(Math.pow(pos[0], 2) + Math.pow(pos[1], 2));
  const vel = Util.randomVec(length);
  posObj.vel = vel;
  MovingObject.call(this, posObj);

}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
