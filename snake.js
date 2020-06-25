import { getInputDirection } from './input.js';

export const SNAKE_SPEED = 4;
// We set snakes body! it will be selected grid row and column
const snakeBody = [{ x: 11, y: 11 }];

export function update() {
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
