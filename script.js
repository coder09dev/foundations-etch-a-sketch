const container = document.querySelector(".container");
let row;
let gridItem;

for (let i = 0; i < 16; i++) {
    row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 16; j++) {
        gridItem = document.createElement("div");
        gridItem.classList.add("gridItem");
        row.appendChild(gridItem);
    }
    container.appendChild(row);
}

const gridItems = document.querySelectorAll(".gridItem");
gridItems.forEach((gridItem) => {
    gridItem.addEventListener('mouseenter', () => {
        gridItem.style.background = "red";
    })
})
