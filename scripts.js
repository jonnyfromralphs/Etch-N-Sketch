const gridContainer = document.getElementById("container");

function makeRows(rows, cols) {
    gridContainer.innerHTML = "";
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      gridContainer.appendChild(cell).className = "grid-item";
    };
  };

  makeRows(16, 16);

  function gridSize() {
      let size = prompt("Change the grid size for your next masterpiece! Choose a value from 2 to 100!");
      if (size > 1 && size < 101) {
          makeRows(size, size);
      }
      else {
          alert("Incompatible grid size.");
      }
  }