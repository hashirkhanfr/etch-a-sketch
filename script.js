let inputDivs = document.getElementById("amountOfDivs");
let submitButton = document.getElementById("mySubmit");
let container = document.getElementById("parent-div");

function generateGrids(boxCount){
    container.innerHTML =` `;
    for (let i = 1; i <= (boxCount*boxCount) ; i++){
        container.innerHTML +=`<div class="box"></div>`;
    }
}

function calculateBoxesSize(boxCount) {
    let boxSize = 100 / boxCount;
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.cssText = `height:${boxSize}%; width:${boxSize}%;`;
        box.addEventListener("mouseover",()=>{
            box.style.backgroundColor= "black";
        })
    });
}

submitButton.addEventListener("click",() =>{
    inputDivs = parseInt(document.getElementById("amountOfDivs").value);
    generateGrids(inputDivs);
    calculateBoxesSize(inputDivs);
})

