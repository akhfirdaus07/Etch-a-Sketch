// Input range function
const labels=document.querySelectorAll("#label");
const input=document.querySelector("#gridRange");

for (let label of labels){
    label.textContent=input.value;
}//default value for label

input.addEventListener("input", inputLabel);

function inputLabel(){
    for (let label of labels){
        label.textContent=input.value;
    }
}
const grid = document.querySelector(".grid");
makeGrid(input.value, input.value);


console.log(input)
// Make Grid

input.addEventListener("change", makeGrid) 

function makeGrid(rows, cols){
    rows= input.value;
    cols= input.value;
    console.log(grid.firstChild)
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    console.log(grid.firstChild)
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
 
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");       
        grid.appendChild(cell).className = "grid-item";
    };
    console.log(grid.firstChild)
};




// Styling the button when clicked
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
};

// Black button function
const blackButton=document.querySelector(".black-ink");
blackButton.addEventListener("click", addMouseOver);

function addMouseOver(){
    let gridItems=document.querySelectorAll(".grid-item");
    for (let gridItem of gridItems){
        gridItem.addEventListener("mouseover", gridBlack);
        gridItem.removeEventListener("mouseover", gridErase);
        gridItem.removeEventListener("mouseover", gridRainbow);
    }
}
function gridBlack() {
    this.classList.add("grid-black");
}

// Rainbow button function
const rainbowButton=document.querySelector(".rainbow-ink");
rainbowButton.addEventListener("click", addMouseOverRainbow)

function addMouseOverRainbow(){
    let gridItems=document.querySelectorAll(".grid-item");
    for (let gridItem of gridItems){
        gridItem.removeEventListener("mouseover", gridBlack);
        gridItem.removeEventListener("mouseover", gridErase);
        gridItem.addEventListener("mouseover", gridRainbow);
    }
}
function gridRainbow(){
    this.style.backgroundColor=randomColor();
}
function randomColor() {
    let color = [];
        for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
} 

// Eraser button function
const eraserButton=document.querySelector(".eraser");
eraserButton.addEventListener("click", eraser);

function eraser(){
    let gridItems=document.querySelectorAll(".grid-item");
    for (let gridItem of gridItems){
        gridItem.addEventListener("mouseover", gridErase)
        gridItem.removeEventListener("mouseover", gridBlack)
        gridItem.removeEventListener("mouseover", gridRainbow)
    }
}
function gridErase() {
    this.classList.remove("grid-black");
    this.style.backgroundColor="";   
}

// Clear button function
const clearButton=document.querySelector(".clear");
clearButton.addEventListener("click", clearGrid)
function clearGrid(){
    let gridItems=document.querySelectorAll(".grid-item");
    for(let gridItem of gridItems){
        gridItem.removeEventListener("mouseover", gridBlack);
        gridItem.removeEventListener("mouseover", gridRainbow);
        gridItem.classList.remove("grid-black");
        gridItem.style.backgroundColor="";
    }
};