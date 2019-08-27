/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nconst DEFAULTS = {\n  COLOR: \"#505050\",\n  RADIUS: 25,\n  SPEED: 4\n};\n\nfunction Asteroid(options) {\n  this.COLOR = DEFAULTS.COLOR;\n  this.RADIUS = DEFAULTS.RADIUS;\n  options.color = this.COLOR;\n  options.radius = this.RADIUS;\n  const vel = Util.randomVec(DEFAULTS.SPEED);\n  options.vel = vel;\n  MovingObject.call(this, options);\n\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function(otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n  }\n}\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nfunction Bullet(options) {\n  options.radius = Bullet.RADIUS;\n\n  MovingObject.call(this, options);\n}\n\nBullet.RADIUS = 2;\nBullet.SPEED = 15;\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.isWrappable = false;\n\nBullet.prototype.collideWith = function(otherObject) {\n  this.game.remove(otherObject);\n}\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nfunction Game() {\n  this.DIM_X = 1000;\n  this.DIM_Y = 600;\n  this.NUM_ASTEROIDS = 0;\n  this.addAsteroids = this.addAsteroids.bind(this);\n  this.asteroids = [];\n  this.bullets = [];\n  this.ships = [];\n  this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function() {\n  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n    const pos = this.randomPosition();\n    const asteroid = new Asteroid({ pos: pos, game: this });\n    this.add(asteroid);\n  }\n}\n\nGame.prototype.add = function(obj) {\n  if (obj instanceof Asteroid) {\n    this.asteroids.push(obj);\n  } else if (obj instanceof Bullet) {\n    this.bullets.push(obj)\n  } else {\n    this.ships.push(obj);\n  }\n}\n\nGame.prototype.addShip = function() {\n  const ship = new Ship({ pos: this.randomPosition(), game: this });\n  this.add(ship);\n  return ship;\n}\n\nGame.prototype.randomPosition = function() {\n  const xPos = Math.random() * this.DIM_X;\n  const yPos = Math.random() * this.DIM_Y;\n  return [xPos, yPos];\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n  const allObj = this.allObjects();\n  allObj.forEach((obj) => {\n    obj.draw(ctx);\n  });\n}\n\nGame.prototype.moveObjects = function() {\n  this.allObjects().forEach((obj) => {\n    obj.move();\n  });\n}\n\nGame.prototype.wrap = function(pos) {\n  return [Util.wrap(pos[0], this.DIM_X), Util.wrap(pos[1], this.DIM_Y)];\n}\n\nGame.prototype.checkCollisions = function() {\n  const allObjects = this.allObjects();\n  for (let i = 0; i < allObjects.length; i++) {\n    const object1 = allObjects[i];\n    for (let j = i + 1; j < allObjects.length; j++) {\n      const object2 = allObjects[j];\n      if (object1.isCollideWith(object2)) {\n        console.log(`number of asteroids: ${this.NUM_ASTEROIDS}`);\n        object1.collideWith(object2);\n      }\n    }\n  }\n  return null;\n}\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n}\n\nGame.prototype.remove = function(obj) {\n  if (obj instanceof Asteroid) {\n    this.NUM_ASTEROIDS--;\n    const indexAsteroid = this.asteroids.indexOf(obj);\n    this.asteroids.splice(indexAsteroid, 1);\n  } else {\n    const indexBullet = this.bullets.indexOf(obj);\n    this.bullets.splice(indexBullet, 1);    \n  }\n}\n\nGame.prototype.allObjects = function() {\n  return this.asteroids.concat(this.ships).concat(this.bullets);\n}\n\nGame.prototype.isOutOfBounds = function(pos) {\n  return (\n    pos[0] < 0 ||\n    pos[0] > this.DIM_X ||\n    pos[1] < 0 ||\n    pos[1] > this.DIM_Y\n  );\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n  this.game = new Game();\n  this.ctx = ctx;\n  this.ship = this.game.addShip();\n}\n\nGameView.MOVES = {\n  w: [0, -1],\n  a: [-1, 0],\n  s: [0, 1],\n  d: [1, 0],\n};\n\nGameView.prototype.start = function() {\n  setInterval(() => {\n    this.game.step();\n    this.game.draw(this.ctx);\n  }, 20);\n  this.bindKeyHandlers();\n}\n\nGameView.prototype.bindKeyHandlers = function() {\n  const ship = this.ship;\n  Object.keys(GameView.MOVES).forEach((k) => {\n    key(k, () => ship.power(GameView.MOVES[k]));\n  });\n  key('space', () => ship.fireBullet());\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', function() {\n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext('2d');\n  canvas.width = 1000;\n  canvas.height = 600;\n  const gameView = new GameView(ctx);\n  gameView.start();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\n\nfunction MovingObject(obj) {\n  this.pos = obj.pos;\n  this.vel = obj.vel;\n  this.radius = obj.radius;\n  this.color = obj.color;\n  this.game = obj.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n  ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n  // if (this instanceof Bullet) {\n  //   console.log(this);\n  // }\n  let wrapPos = this.game.wrap(this.pos);\n  \n  // if (this.isWrappable) {\n  //   wrapPos = this.game.wrap(this.pos);\n  // }\n  // if (this instanceof Bullet) {\n  //   console.log(\"after: \");\n  // }\n  this.pos[0] = wrapPos[0] + this.vel[0];\n  this.pos[1] = wrapPos[1] + this.vel[1];  \n  // if (this instanceof Bullet) {\n  //   console.log(this);\n  // }\n  \n}\n\nMovingObject.prototype.isCollideWith = function(otherObject) {\n  const dist = Util.dis(this.pos, otherObject.pos);\n  if (dist < this.radius + otherObject.radius) {\n    return true;\n  } \n  return false; \n}\n\nMovingObject.prototype.collideWith = function(otherObject) {\n \n}\n\nMovingObject.prototype.isWrappable = true;\n\nmodule.exports = MovingObject;\n\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nfunction randomColor() {\n  const hexDigits = \"0123456789ABCDEF\";\n\n  let color = \"#\";\n  for (let i = 0; i < 3; i++) {\n    color += hexDigits[Math.floor(Math.random() * 16)];\n  }\n  return color;\n}\n\nfunction Ship(options) {\n  options.radius = Ship.RADIUS;\n  options.color = options.color || randomColor();\n  options.vel = options.vel || [0, 0];\n\n  MovingObject.call(this, options);\n}\n\nShip.RADIUS = 10;\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n  this.vel = [0, 0];\n}\n\nShip.prototype.power = function(impulse) {\n  this.vel[0] += impulse[0];\n  this.vel[1] += impulse[1];\n}\n\nShip.prototype.fireBullet = function() {\n  const len = Util.len(this.vel);\n\n  if (len === 0) {\n    // Can't fire unless moving.\n    return;\n  }\n\n  const relVel = Util.scale(\n    Util.dir(this.vel),\n    Bullet.SPEED\n  );\n\n  const bulletVel = [\n    relVel[0] + this.vel[0], relVel[1] + this.vel[1]\n  ];\n\n  const bullet = new Bullet({\n    pos: this.pos,\n    vel: bulletVel,\n    color: this.color,\n    game: this.game\n  });\n\n  this.game.add(bullet);\n\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass; \n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  \n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n\n  wrap(coord, max) {\n    if (coord < 0) {\n      return max - (coord % max);\n    } else if (coord > max) {\n      return coord % max;\n    } else {\n      return coord;\n    }\n  },\n\n  dis(pos1, pos2) {\n    const dX = Math.pow((pos1[0] - pos2[0]), 2);\n    const dY = Math.pow((pos1[1] - pos2[1]), 2);\n    return Math.sqrt(dX + dY);\n  },\n\n  len(vec) {\n    return Util.dis([0, 0], vec);\n  },\n\n  dir(vec) {\n    const len = Util.len(vec);\n    return Util.scale(vec, 1 / len);\n  }\n\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });