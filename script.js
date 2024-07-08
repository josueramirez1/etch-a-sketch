// global selectors
const container = document.querySelector(".container");
const gridChange = document.querySelector(".gridChange");
let lightness = 100;

// helper functions
function numberIn(num) {
  for (let i = 1; i <= num * num; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    //   width and height added dynamically
    let tempMeasure = 100 / num;
    tile.style.height = `${tempMeasure}%`;
    tile.style.width = `${tempMeasure}%`;
    //   append to page
    container.appendChild(tile);
  }
}

function createRandomColor() {
  let colorName = "hsl";
  let hue = Math.floor(Math.random() * 360);
  let saturation = Math.floor(Math.random() * 100) + "%";
  // let lightness = Math.floor(Math.random() * 100) + "%";
  if (lightness > 0) {
    lightness = lightness - 10;
  }
  colorName += `(${hue}, ${saturation}, ${lightness}%)`;

  return colorName;
}

function createGame() {
  let n = 16;
  numberIn(n);
}
// Create standard 16 x 16 game.
createGame();

// Listen for events.
// When user moves mouse over grid...

container.addEventListener("mouseover", (e) => {
  if (!e.target.matches(".tile")) return;
  e.target.style.background = createRandomColor();
});
// When button is clicked...
gridChange.addEventListener("click", (e) => {
  // selector
  const tiles = [...document.querySelectorAll(".tile")];
  const breaks = [...document.querySelectorAll(".break")];
  // acquire number from prompt
  let numberInput = parseInt(prompt("Grid size per side?", ""));
  if (numberInput > 100) {
    numberInput = 0;
    numberInput = parseInt(
      prompt("Grid size not acceptable. Please try another number", "")
    );
  }
  // for each current tile, delete
  tiles.forEach((tile) => container.removeChild(tile));
  breaks.forEach((brek) => container.removeChild(brek));
  // then add new grid based on input
  numberIn(numberInput);
});
