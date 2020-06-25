let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

// We register cases for key and update input direction for each
// Then we make calculations in snake.js with this !
window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      // We dont move up if we are currently moving up or down
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case 'ArrowLeft':
      // Dont move if currently moving in x axis
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

//Here we get input from user
export function getInputDirection() {
  // we store last input so snake wont move in x or y axis after move in same axis. (e.g. not from left to right)
  lastInputDirection = inputDirection;
  return inputDirection;
}
