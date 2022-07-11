
let erase = false;

let mouseIsHeld = false;
document.body.onmousedown = () => (mouseIsHeld = true)
document.body.onmouseup = () => (mouseIsHeld = false)

let mouseOver = false;

function makeGrid(size) {
    let gridContainer = document.querySelector("#grid-draw-container");
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Clear the grid first 
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let box = document.createElement("div");
            box.className = "undrawn-box";
            
            box.addEventListener('mousemove', () => {
                if (mouseIsHeld && erase) {
                    box.className = "undrawn-box";
                } 
                
                if (mouseIsHeld) {
                    box.className = "drawn-box";
                }
            });
            gridContainer.appendChild(box);
        }
    }

}

function modifyGridSize(incOrDec) {
    let size = parseInt(document.querySelector("#grid-size").textContent.split("x")[0]);

    if (incOrDec < 0 && size > 8) {
        size /= 2;
    }

    else if (incOrDec > 0 && size < 64) {
        size *= 2;
    }

    let newSize = document.querySelector("#grid-size");
    newSize.textContent = `${size}x${size}`;

    makeGrid(size);
}

// Set up mouse hold on draw area
document.querySelector("#grid-draw-container").addEventListener("mouseover", () => {
    mouseOver = true;
});

document.querySelector("#grid-draw-container").addEventListener("mouseleave", () => {
    mouseOver = false;
});


// Set up increase/decrease sizes
document.querySelector("#decrease-size").addEventListener("click", () => {
    modifyGridSize(-1);
});

document.querySelector("#increase-size").addEventListener("click", () => {
    modifyGridSize(1);
});

// Set up Clear
document.querySelector("#clear").addEventListener("click", () => {
    modifyGridSize(0);
})

// Set up Erase
let eraseButton = document.querySelector("#erase");
eraseButton.addEventListener("click", () => {
    if (erase) {
        erase = false;
        eraseButton.style.boxShadow = "0 0 2.5px 0 black";
    }
    else {
        erase = true;
        eraseButton.style.boxShadow = "0 0 10px 2px red";
    }
})

modifyGridSize(0);
