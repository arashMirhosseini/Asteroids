const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;

const mo = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 20,
  color: "#00FF00"
});

const ast = new Asteroid({ pos: [30, 90]});

document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  mo.draw(ctx);
  ast.draw(ctx);
});