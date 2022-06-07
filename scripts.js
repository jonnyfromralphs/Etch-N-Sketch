const gridContainer = document.getElementById("container");
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let currentMode = "color";


function makeRows(rows, cols) {
    gridContainer.innerHTML = "";
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.className = "grid-item";
      cell.setAttribute("id", "color");
      gridContainer.appendChild(cell);
      
    }
    addClickAction();
  }

makeRows(16, 16);



function addClickAction() {
    const cells = document.querySelectorAll("#color");

    cells.forEach((cell) => {
        cell.addEventListener("mousedown", draw);
        cell.addEventListener("mouseover",draw);
    })
    }

function draw(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return;
    }
    else {
        e.target.style.backgroundColor = "black";
    }
}


function gridSize() {
    let size = prompt("Change the grid size for your next masterpiece! Choose a value from 2 to 100!");
    if (size > 1 && size < 101) {
        makeRows(size, size);
    }
    else {
        alert("Incompatible grid size.");
    }
}




