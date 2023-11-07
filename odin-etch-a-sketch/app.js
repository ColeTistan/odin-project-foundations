// Get and declare each button
const btns = document.getElementsByTagName('button');
const eraserBtn = btns[0];
const randomBtn = btns[1];
const clearBtn = btns[2];
const submitBtn = btns[3];

let currentColor = 'var(--black)';

// clears all colored divs on canvas back to original color
const clearCanvas = function() {
    let canvas = document.querySelector('.canvas');
    let squareDivs = canvas.querySelectorAll('div');
    squareDivs.forEach(function(div) {
        div.style.background = 'var(--light)';
    })
    currentColor = 'var(--black)';
}

// retrieves current color value set to determine
// what button functionality will be triggered.
const updateColor = function(colorSelected) {
    currentColor = colorSelected;
}

// retrieves user input to generate some number of grids on canvas
const getUserInput = function() {
    let gridInput = document.getElementById('grid-input');
    if (gridInput.value < 0 || gridInput.value > 100) {
        alert("Number entered is smaller than 0 or greater than 100. Please enter a different number.");
        gridInput.value = 16;
        return gridInput.value;
    } else {
        return gridInput.value;
    }
}

// Generates squares and inserts into canvas
const createSquares = function() {
    let size = getUserInput();
    let canvas = document.querySelector('.canvas');
    let squareDivs = canvas.querySelectorAll('div');
    let gridSize = size * size;

    // Remove all square divs before prepopulating canvas
    squareDivs.forEach(function(div) {
        div.remove();
    });

    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    // populate grid with given size
    for (let i = 0; i < gridSize; i++) {
        let squareDiv = document.createElement('div');
        currentColor = 'var(--black)';
        squareDiv.addEventListener('mouseover', function() {
            switch (currentColor) {
                case 'eraser':
                    squareDiv.style.background = 'var(--light)';
                    break;
                case 'random':
                    squareDiv.style.background = `hsl(${Math.floor(Math.random() * 255)}, 100%, 50%)`;
                    break;
                default:
                    squareDiv.style.background = 'var(--black)';
                    break;
            }
        });
        squareDiv.style.border = 'solid 1px #d3d3d3';
        squareDiv.style.background = 'var(--light)';
        canvas.insertAdjacentElement('beforeend', squareDiv);
    }
}

// button events to trigger UI functionality

submitBtn.addEventListener('click', function() {
    createSquares();
});

clearBtn.addEventListener('click', clearCanvas());

const main = function() {
    createSquares(16);
}

main();