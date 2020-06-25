import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');
// curTime is exact time when our function runs  border: .25vmin solid black;
// we want to be recalling this function immidiately so we get another loop.
// This function will loop continously
function main(curTime) {
  const secondsSinceLastRender = (curTime - lastRenderTime) / 1000;
  // It tells us when we can render next frame
  // we r requesting a frame to animate a game
  // -----------
  //   "Metoda Window.requestAnimationFrame() informuje
  //   przeglądarkę o zamiarze wykonania animacji i żąda od
  //   przeglądarki wywołania określonej funkcji w celu
  //   odświeżenia animacji przed następnym odmalowaniem.
  //   Argumentem metody jest funkcja (callback) do
  //   wywołania przed następnym odmalowaniem
  //   (odświeżeniem kanwy)."
  // --------------
  window.requestAnimationFrame(main);
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  console.log('Render');
  lastRenderTime = curTime;

  //   Games are usually broken into two different steps
  //   update() updates all of the logic for our game
  // !!! 1. Update will move snake to position, update food, life etc
  update();
  //   draw() or render() draws  everything on  the screen based on update loop
  // !!! 2.Draw will actually render logic
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
}

function draw() {
  // We clear previous divs in game board!
  gameBoard.innerHTML = '';
  // and render snake body
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
