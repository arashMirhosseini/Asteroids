const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const GameView = require("./game_view.js");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.GameView = GameView;

const mo = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 30,
  color: "#00FF00"
});

const ast = new Asteroid({ pos: [30, 90]});

document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 1000;
  canvas.height = 600;
  mo.draw(ctx);
  // ast.draw(ctx);
  const gameView = new GameView(ctx);
  gameView.start();
});
