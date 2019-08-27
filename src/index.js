const GameView = require("./game_view");
const Game = require("./game");

document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('game-canvas');
  canvas.width = 1000;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');
  const game = new Game();
  const gameView = new GameView(game, ctx);
  gameView.start();
});
