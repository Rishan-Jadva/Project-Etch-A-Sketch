const squareDiv = document.querySelector(".square-container");

const squaresCreator = sideLength => {
    for (let i = 0; i < sideLength; i++){
        let line = document.createElement("div");
        line.classList.add("line-container");
        squareDiv.appendChild(line);
        for (let j = 0; j < sideLength; j++){
            let square = document.createElement("div");
            square.classList.add("square");
            line.appendChild(square);
        }
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener("mouseover", event => {
        event.target.classList.add("color");
    }));
}
squaresCreator(16);

const changeBtn = document.getElementById("change");
changeBtn.addEventListener("click", () => {
    let num = 0;
    while (!(num > 0 && num <= 100)){
        num = prompt("How many squares per side?");
    }
    squareDiv.textContent = "";
    squaresCreator(num);
})