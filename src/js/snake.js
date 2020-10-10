"use strict";

const SnakeGame_types = {
  ERR_SUCCESS: 0,
  ERR_ERROR: 1,
  ERR_BADPARAMETER: 2
};
let SnakeGame_init = function SnakeGame_init({ logger }) {
  this.logger = logger;
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

  for (let i = 0; i < 100; i++) {
    // Create Element
    const square = document.createElement("div");
    // Add styling
    square.classList.add(".square");
    // Append it to the grid element
    gridElem.appendChild(square);
    // Add element to the squares playground array
    this.squares.push(square);
  }

  if (this.logger) this.logger.debug(this.squares);

  // Return success if reached
  return this.types.ERR_SUCCESS;
}

const SnakeGame = {
  // Types
  types: SnakeGame_types,
  // Props
  logger: null,
  squares: [] /**< Playground of the game */,
  // Methods
  init: SnakeGame_init,
  createGrid: SnakeGame_createGrid
};
