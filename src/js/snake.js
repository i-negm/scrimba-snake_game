"use strict";

const SnakeGame_types = {
  ERR_SUCCESS: 0,
  ERR_ERROR: 1,
  ERR_BADPARAMETER: 2
};
let SnakeGame_init = function SnakeGame_init({ logger, size }) {
  if (logger !== undefined) this.logger = logger;
  if (size !== undefined) {
    this.sizePlayground.x = size.x;
    this.sizePlayground.x = size.y;
  } else {
    if (this.logger)
      this.logger.debug(
        "size parameter not specified, default values will be taken"
      );
  }
  if (this.logger) this.logger.debug("SnakeGame is initilaized");
};

function SnakeGame_createGrid(gridElem) {
  if (this.logger) this.logger.debug("Creating grid..");

  // If gridElem is not passed
  if (gridElem === undefined) {
    if (this.logger)
      this.logger.error("You have to pass the grid element as a parameter");
    return this.types.ERR_BADPARAMETER;
  }

  let size = this.sizePlayground.x * this.sizePlayground.y;
  for (let i = 0; i < size; i++) {
    // Create Element
    const square = document.createElement("div");
    // Add styling
    square.classList.add("snake-square");
    // Append it to the grid element
    gridElem.appendChild(square);
    // Add element to the squares playground array
    this.squares.push(square);
  }

  if (this.logger) this.logger.debug(this.squares);

  // Return success if reached
  return this.types.ERR_SUCCESS;
}

function SnakeGame_renderCurrentSnake() {
  console.log(this.currentSnake);
  this.currentSnake.forEach((snakeBodyPiece) => {
    this.squares[snakeBodyPiece].classList.add("snake-body");
  });
  console.log(this.squares);
}

const SnakeGame = {
  // Types
  types: SnakeGame_types,
  // Props
  logger: null,
  sizePlayground: { x: 10, y: 10 },
  squares: [] /**< Playground of the game */,
  currentSnake: [] /**< Indecies of the current snake on the playground */,
  // Methods
  init: SnakeGame_init,
  createGrid: SnakeGame_createGrid,
  renderCurrentSnake: SnakeGame_renderCurrentSnake
};
