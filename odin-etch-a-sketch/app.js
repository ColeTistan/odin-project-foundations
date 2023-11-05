// Generates squares and inserts into canvas
const createSquares = function(size) {
    let canvas = document.querySelector('.canvas');
    let squareDivs = canvas.querySelectorAll('div');
    let gridSize = size * size;

    // Remove all square divs before prepopulating canvas.
    squareDivs.forEach(function(div) {
        squareDivs.remove(div);
    });

    // canvas.style.width = `${}px`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    // populate grid with given size
    for (let i = 0; i < gridSize; i++) {
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        canvas.insertAdjacentElement('beforeend', squareDiv);
    }
    
}

createSquares(16);