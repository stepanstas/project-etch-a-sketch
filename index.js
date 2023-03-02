// Get the grid container and buttons for grid size
const gridContainer = document.querySelector(".container-grid");
const gridSizeBtns = document.querySelectorAll(".grid-size-btn");
const resetBtn = document.querySelector("#reset-btn");

// Set default grid size to 16
let gridSize = 16;

// Create the grid squares 
function createGrid(size) {
    const numberOfSquares = size * size;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Create squares and append them to the grid container
    for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
    }
}

gridSizeBtns.forEach((button) => {
    button.addEventListener("click", (button) => {
        const newGridSize = parseInt(button.dataset.size);
        gridContainer.innerHTML = ""; // Clear the grid
        createGrid(newGridSize); // Create a new sized grid
        gridSize = newGridSize; // Update the new grid size to the variable
    })
})

// Change the color of squares on hover
gridContainer.addEventListener("mouseover", (event) => {
    if(event.target.classList.contains("square")) { 

        // Create a random RGB color
        const red = Math.floor(Math.random() * 256 );
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const color = `rgb(${red}, ${green}, ${blue})`;

        // Set the background color of the square to the random generated color
        event.target.style.backgroundColor = color;
    }
})

// Function to reset and clear the grid 
function clearGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "transparent";
    })
}

resetBtn.addEventListener("click", clearGrid);

createGrid(gridSize);