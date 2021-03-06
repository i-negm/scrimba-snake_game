console.clear();
/**
 * Init modules
 */
Logger.setVerbosityLevel(Logger.enum.verbosity.ALL);
SnakeGame.init({ logger: Logger, size: { x: 10, y: 10 } });
/**
 * DOM Handles
 */
const snakeGridElem = document.querySelector(".snake-grid");

/**
 * Functions
 */
function displayError() {
  console.error("Display Error");
}

/**
 * Logic
 */
let err = SnakeGame.createGrid(snakeGridElem);
if (err !== SnakeGame.types.ERR_SUCCESS) {
  displayError();
}

err = SnakeGame.renderCurrentSnake();

/**
 * Registering Events
 */
