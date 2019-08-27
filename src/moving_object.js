const Util = require("./util.js");
// const Bullet = require("./bullet.js");

function MovingObject(obj) {
  this.pos = obj.pos;
  this.vel = obj.vel;
  this.radius = obj.radius;
  this.color = obj.color;
  this.game = obj.game;
}

MovingObject.EXE = 2; 

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.fill();
}

MovingObject.prototype.move = function() {
  if (this.game.isOutOfBounds(this.pos)) {
    
  }
  // if (this instanceof Bullet) {
  //   console.log(this);
  // }
  let wrapPos = this.game.wrap(this.pos);
  
  // if (this.isWrappable) {
  //   wrapPos = this.game.wrap(this.pos);
  // }
  // if (this instanceof Bullet) {
  //   console.log("after: ");
  // }
  this.pos[0] = wrapPos[0] + this.vel[0];
  this.pos[1] = wrapPos[1] + this.vel[1];  
  // if (this instanceof Bullet) {
  //   console.log(this);
  // }
  
}

MovingObject.prototype.isCollideWith = function(otherObject) {
  const dist = Util.dis(this.pos, otherObject.pos);
  if (dist < this.radius + otherObject.radius) {
    return true;
  } 
  return false; 
}

MovingObject.prototype.collideWith = function(otherObject) {
 
}

MovingObject.prototype.isWrappable = true;

module.exports = MovingObject;


