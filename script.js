const container = document.querySelector('#main');

const makeGrid = (count = 20) => {
  const gridSize = 640;
  const squareSize = gridSize / count;
  for (i = 0; i < count * count; i++) {
    createSquare(i, squareSize);
  }
};

const createSquare = (id, size) => {
  let divNumber = id;
  let entries = 0;
  // Create the grid square
  divNumber = document.createElement('div');
  // Size it based on what makeGrid() said to size it to
  divNumber.style.height = size + 'px';
  divNumber.style.width = size + 'px';
  // Stick it on the #main div
  container.appendChild(divNumber);
  // Create an event listener to update the color every time the mouse comes in
  divNumber.addEventListener('mouseenter', () => {
    entries += 0.1;
    divNumber.style.backgroundColor = 'rgba(0, 0, 0, ' + entries + ')';
  });
};

const resetCanvas = () => {
  console.log('resetting');
  container.innerHTML = '';
  userSize = window.prompt('How many squares per side?');
  makeGrid(parseInt(userSize));
};

makeGrid();
