const container = document.querySelector(".container");
const gridChange = document.querySelector(".gridChange");

container.addEventListener("mouseover", (e) => {
  if (!e.target.matches(".tile")) return;
  e.target.style.backgroundColor = "red";
});

function createGame() {
  for (let index = 0; index < 272; index++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    container.appendChild(tile);
  }
}

createGame();
gridChange.addEventListener("click", (e) => {
  console.log("yes");
});
