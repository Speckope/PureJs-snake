//Important note! - CSS grid starts from 1, so we move between 1 and 21!
// 0 is technically outside the grid!

let food = { x: 10, y: 1 };
// how much snake grows as it eats food
const EXPANSION_RATE = 1;

export function update() {
  // if we are on food we do expand it
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    // After expanding snake we set foot to new position
    food = { x: 20, y: 10 };
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}

// function taking expand rate and adding segments
export function expandSnake(amount) {
  newSegments += amount;
}
