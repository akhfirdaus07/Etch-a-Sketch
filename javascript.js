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

const blackButton=document.querySelector(".black-ink");

blackButton.addEventListener("click", addMouseOver)

function addMouseOver(){
    for (let gridItem of gridItems){
        gridItem.addEventListener("mouseover", gridBlack);
    }
}

function gridBlack() {
    this.classList.add("grid-black");
}



const clearButton=document.querySelector(".clear");

clearButton.addEventListener("click", clearGrid)

function clearGrid(){
    for(let gridItem of gridItems){
        gridItem.classList.remove("grid-black")
    }
}

const eraserButton=document.querySelector(".eraser");

eraserButton.addEventListener("click", eraser);

function eraser(){
    for (let gridItem of gridItems){
        gridItem.addEventListener("mouseover", gridErase)
    }
}

function gridErase() {
    this.classList.remove("grid-black")   
}

const buttons=document.querySelectorAll(".button");

for(const button of buttons){
    button.addEventListener("click", toggleActive)
}

function toggleActive(){
    clearActive();
    this.classList.add("active");
}

function clearActive(){
    for(const button of buttons){
        button.classList.remove("active");
    }
}