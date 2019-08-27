const Util = require("./util");
// const Bullet = require("./bullet.js");

function MovingObject(obj) {
  this.pos = obj.pos;
  this.vel = obj.vel;
  this.radius = obj.radius;
  this.color = obj.color;
  this.game = obj.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.fill();
}
const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
MovingObject.prototype.move = function(timeDelta) {
  // timeDelta is number of milliseconds since last move
  // if the computer is busy the time delta will be larger
  // in this case the MovingObject should move farther in this frame
  // velocity of object is how far it should move in 1/60th of a second
  const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
    offsetX = this.vel[0] * velocityScale,
    offsetY = this.vel[1] * velocityScale;
  
  this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
  
  if (this.game.isOutOfBounds(this.pos)) {
    if (this.isWrappable) {
      this.pos = this.game.wrap(this.pos);
    } else {
      this.remove();
    }
  }
};

MovingObject.prototype.isCollideWith = function(otherObject) {
  const dist = Util.dist(this.pos, otherObject.pos);
  if (dist < (this.radius + otherObject.radius)) {
    return true;
  } 
  return false; 
};

MovingObject.prototype.collideWith = function(otherObject) {
 
};

MovingObject.prototype.remove = function() {
  this.game.remove();
};

MovingObject.prototype.isWrappable = true;

module.exports = MovingObject;


