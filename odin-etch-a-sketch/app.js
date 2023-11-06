// Get and declare each button
const btns = document.getElementsByTagName('button');
const eraserBtn = btns[0];
const randomBtn = btns[1];
const resetBtn = btns[2];
const smallGridBtn = btns[3];
const mediumGridBtn = btns[4];
const largeGridBtn = btns[5];

console.log(btns);

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
        squareDiv.classList.add('square');
        canvas.insertAdjacentElement('beforeend', squareDiv);
    }
}

// Enable draw mode to allow user to fill squares
const draw = function() {
    let canvas = document.querySelector('.canvas');
    let squareDivs = canvas.querySelectorAll('div');
    squareDivs.forEach(function(div) {
        div.addEventListener('mouseover', function() {
            div.style.background = 'var(--dark-color)';
        });
    });
}

createSquares(16);
draw();

smallGridBtn.addEventListener('click', function() {
    createSquares(16);
    draw();
});
mediumGridBtn.addEventListener('click', function() {
    createSquares(32);
    draw();
});
largeGridBtn.addEventListener('click', function() {
    createSquares(64);
    draw();
});