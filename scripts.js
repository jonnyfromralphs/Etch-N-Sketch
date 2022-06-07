const gridContainer = document.getElementById("container");
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let currentMode = "paint";
let currentColor = "black";
let eraserMode = document.getElementById("eraser");
let rgbMode = document.getElementById("rgb");
let resetBoard = document.getElementById("reset");
let colorPicker = document.getElementById("colorPicker");

eraserMode.addEventListener("click", () => {
    currentMode = "eraser";
});
resetBoard.addEventListener("click", () => {
    makeRows(16,16);
    currentMode = "paint";
    currentColor = "black";
    colorPicker.value = "#333333"
});
rgbMode.addEventListener("click", () => {
    currentMode = "rgb";
})
colorPicker.addEventListener("input", (e) => {
    setCurrentColor(e.target.value);
    currentMode = "paint";
})


function setCurrentColor(newColor) {
    currentColor = newColor;
  }


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
    if (e.type === "mouseover" && !mouseDown) {
        return;
    }
    if (currentMode == "rgb") {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    else if (currentMode == "eraser") {
        currentColor = "white";
        e.target.style.backgroundColor = currentColor;
    }
    else if (currentMode == "paint") {
        e.target.style.backgroundColor = currentColor;
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




