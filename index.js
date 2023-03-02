// Get the grid container and buttons for grid size
const gridContainer = document.querySelector(".container-grid");
const gridSizeBtns = document.querySelectorAll(".grid-size-btn");
const colorPicker = document.querySelector("#color-picker");
const resetBtn = document.querySelector("#reset-btn");

// Set default grid size to 16
let gridSize = 16;
let selectedColor = "#000";

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

function startGrid() {
    createGrid(gridSize);

    // Add event listeners to the grid size buttons
    gridSizeBtns.forEach((button) => {
        button.addEventListener("click", (event) => {
            gridSizeBtns.forEach((button) => button.classList.remove("active"));
            event.target.classList.toggle("active");
            gridContainer.style.pointerEvents = "all";
            const newGridSize = parseInt(event.target.dataset.size);
            gridContainer.innerHTML = ""; // Clear the grid
            createGrid(newGridSize); // Create a new sized grid
            gridSize = newGridSize; // Update the new grid size to the variable
        })
    })

    // Add event listener to reset button
    resetBtn.addEventListener("click", clearGrid);

    // Function to clear the grid 
    function clearGrid() {
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.style.backgroundColor = "transparent";
        })
        gridSizeBtns.forEach((button) => {
            button.classList.remove("active");
        })
        gridContainer.style.pointerEvents = "none";
    }

    // Add event listener to change the color of squares on hover
    gridContainer.addEventListener("mouseover", (event) => {
        if(event.target.classList.contains("square")) { 

            event.target.style.backgroundColor = selectedColor;
            /* Create a random RGB color
            const red = Math.floor(Math.random() * 256 );
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            const color = `rgb(${red}, ${green}, ${blue})`;
            */

            // Set the background color of the square to the random generated color
            //event.target.style.backgroundColor = color;
        }
    })

    colorPicker.addEventListener("input", (event) => {
        selectedColor = event.target.value;
    })
}

startGrid();