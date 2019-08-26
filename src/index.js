const GameView = require("./game_view.js");

document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 1000;
  canvas.height = 600;
  const gameView = new GameView(ctx);
  gameView.start();
});
