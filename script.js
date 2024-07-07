// global selectors
const container = document.querySelector(".container");
const gridChange = document.querySelector(".gridChange");

// helper functions
function numberIn(num) {
  for (let i = 1; i <= num * (num + 1); i++) {
    const tile = document.createElement("div");

    if (i % (num + 1) === 0) {
      tile.classList.add("break");
    } else {
      tile.classList.add("tile");
    }
    container.appendChild(tile);
  }
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
  e.target.style.backgroundColor = "red";
});
// When button is clicked...
gridChange.addEventListener("click", (e) => {
  // selector
  const tiles = [...document.querySelectorAll(".tile")];
  const breaks = [...document.querySelectorAll(".break")];
  // acquire number from prompt
  let numberInput = parseInt(prompt("Grid size per side?", ""));
  if (numberInput > 38) {
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
