import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

//Important note! - CSS grid starts from 1, so we move between 1 and 21!
// 0 is technically outside the grid!

let food = getRandomFoodPosition();
// how much snake grows as it eats food
const EXPANSION_RATE = 1;

export function update() {
  // if we are on food we do expand it
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    // After expanding snake we set foot to new position
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}

// This function will loop through position and while its not finish untill it finds
// position thats not on snake
function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
