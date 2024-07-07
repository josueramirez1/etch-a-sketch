// global selectors
const container = document.querySelector(".container");
const gridChange = document.querySelector(".gridChange");

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
  let color = "#";
  let letters = [
    "000000",
    "FF0000",
    "00FF00",
    "0000FF",
    "FFFF00",
    "00FFFF",
    "FF00FF",
    "C0C0C0",
  ];
  color += letters[Math.floor(Math.random() * letters.length)];
  return color;
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
  e.target.style.backgroundColor = createRandomColor();
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
