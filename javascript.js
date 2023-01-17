const grid = document.querySelector(".grid");

function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");       
        grid.appendChild(cell).className = "grid-item";
    };
};

makeGrid(64, 64);

const gridItems=document.querySelectorAll(".grid-item");

function gridBlack() {
    this.classList.add("grid-black")   
}

for (let gridItem of gridItems){
    gridItem.addEventListener("mouseover", gridBlack)
}