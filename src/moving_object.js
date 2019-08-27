const Util = require("./util.js");

function MovingObject(obj) {
  this.pos = obj.pos;
  this.vel = obj.vel;
  this.radius = obj.radius;
  this.color = obj.color;
  this.game = obj.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.fillStyle = this.color;
}

MovingObject.prototype.move = function() {
  const wrapPos = this.game.wrap(this.pos);
  this.pos[0] = wrapPos[0] + this.vel[0];
  this.pos[1] = wrapPos[1] + this.vel[1];

}

MovingObject.prototype.isCollideWith = function(otherObject) {
  const dist = Util.dis(this.pos, otherObject.pos);
  if (dist < this.radius + otherObject.radius) {
    return true;
  } 
  return false; 
}

module.exports = MovingObject;


