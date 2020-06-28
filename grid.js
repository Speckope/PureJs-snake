const GRID_SIZE = 21;

export function randomGridPosition() {
  return {
    //   we return number between 0, 1. Multiply it by 21 so
    //   we have between 0 and 20, then floor this and add 1
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
}

export function outsideGrid(position) {
  return (
    position.x < 1 ||
    position.x > GRID_SIZE ||
    position.y < 1 ||
    position.y > GRID_SIZE
  );
}
