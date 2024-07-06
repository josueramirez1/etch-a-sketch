const container = document.querySelector(".container");
const gridChange = document.querySelector(".gridChange");

container.addEventListener("mouseover", (e) => {
  if (!e.target.matches(".tile")) return;
  e.target.style.backgroundColor = "red";
});

function createGame() {
  // My original way of creating the grid
  //   function createCol() {
  //     const col = document.createElement("div");
  //     col.setAttribute("class", "column");
  //     container.append(col);
  //     for (let i = 0; i < 16; i++) {
  //       const tile = document.createElement("div");
  //       tile.setAttribute("class", "tile");
  //       col.appendChild(tile);
  //     }
  //   }
  //   for (let i = 0; i < 16; i++) {
  //     createCol();
  //   }

  // using flexbox and flex-wrap, making every 17th child...see css

  for (let index = 0; index < 272; index++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    container.appendChild(tile);
  }

  gridChange.addEventListener("click", (e) => {});
}

createGame();
