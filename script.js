
function drawGrid(numOfSquares) {
    const container = document.createElement("div");
    container.classList.add("container");

    let row;
    let gridItem;
    for (let i = 0; i < numOfSquares; i++) {
        row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < numOfSquares; j++) {
            gridItem = document.createElement("div");
            gridItem.classList.add("gridItem");
            row.appendChild(gridItem);
        }
        container.appendChild(row);
    }

    const body = document.querySelector("body");
    body.appendChild(container);

    const gridItems = document.querySelectorAll(".gridItem");
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseenter', () => {
            gridItem.style.background = "red";
        })
    })
}

// starts here
drawGrid(16);
const button = document.querySelector("button");
button.addEventListener("click", () => {
    const numOfSquares = prompt("Enter no. of squares for new grid");
    const container = document.querySelector(".container");
    container.remove();
    if (numOfSquares <= 100) {
        drawGrid(Number(numOfSquares));
    }
})
