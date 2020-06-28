import { getInputDirection } from './input.js';

export const SNAKE_SPEED = 5;
// We set snakes body! it will be selected grid row and column
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export function update() {
  addSegments();

  const inputDirection = getInputDirection();
  // we loop from end, and we dont care for last segment, bc it will disappear
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    //   On first iteration i is 2nd to last element and we select here last element(i+1)
    snakeBody[i + 1] = { ...snakeBody[i] }; // We set last element to 2nd to last element.
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  console.log('drawSnake');
  //Loop through each segment of the body
  snakeBody.forEach((segment) => {
    //Add div to corresponding co-ordinates by setting style on created div
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    // Add style to created div
    snakeElement.classList.add('snake');
    // Make child on gameBoard
    gameBoard.appendChild(snakeElement);
  });
}

// function taking expand rate and adding segments
export function expandSnake(amount) {
  newSegments += amount;
}

// it will check if any of our snake position equals what we pass and return true
// We also add additional argument for ignoring head when checking in intersection
// This is great stuff
export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index == 0) return false;
    return equalPositions(segment, position);
  });
}
// Get snake head that is first segment of its body
export function getSnakeHead() {
  return snakeBody[0];
}

// Here we determine if snakes head is touching any of its body parts
export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

// Check both positions
function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    // we push one segment onto the snakeBody
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newSegments = 0;
}
