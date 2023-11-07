// Get and declare each button
const btns = document.getElementsByTagName('button');
const eraserBtn = btns[0];
const randomBtn = btns[1];
const resetBtn = btns[2];
const smallGridBtn = btns[3];
const mediumGridBtn = btns[4];
const largeGridBtn = btns[5];

let currentColor = '#222222';

const draw = function(squareDiv) {
    console.log(currentColor);
    squareDiv.style.background = currentColor;
}

// Generates squares and inserts into canvas
const createSquares = function(size) {
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
        currentColor = '#222222';
        squareDiv.addEventListener('mouseover', function() {
            switch (currentColor) {
                case 'eraser':
                    squareDiv.style.background = 'var(--white)';
                    break;
                // case 'reset':
                //     squareDiv.style.background = 'var(--white)';
                //     break;
                case 'random':
                    squareDiv.style.background = `hsl(${Math.floor(Math.random() * 255)}, 100%, 50%)`;
                    break;
                default:
                    squareDiv.style.background = '#222222';
                    break;
            }
        });
        squareDiv.style.border = 'solid 1px #d3d3d3';
        squareDiv.style.background = '#ffffff';
        canvas.insertAdjacentElement('beforeend', squareDiv);
    }
}

const updateColor = function(colorSelected) {
    currentColor = colorSelected;
    console.log(currentColor)
}

smallGridBtn.addEventListener('click', function() {
    createSquares(16);
});

mediumGridBtn.addEventListener('click', function() {
    createSquares(32);
});

largeGridBtn.addEventListener('click', function() {
    createSquares(64);
});

const main = function() {
    createSquares(16);
}

main();