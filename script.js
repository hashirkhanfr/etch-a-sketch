let paintDiv = document.querySelector(".painting-container");
let brushSize = document.querySelector("#brush-size");
let brushColor = document.querySelector("#brush-color");
let sliderColor = document.querySelector("#brush-size");
let buttonColor = document.querySelector(".type-color");
let buttonRandom = document.querySelector(".type-randomized");
let buttonDarken = document.querySelector(".type-darken");
let penType = 'color';
function generateDivs(){
    paintDiv.innerHTML = ` `;
    for (let i = 1; i <= (brushSize.value * brushSize.value) ; i++){
        paintDiv.innerHTML += `<div style="background-color: white; width:${800/brushSize.value}px ; height: ${800/brushSize.value}px;" class="theBox"></div>`
        }
        let paintBox = document.querySelectorAll(".theBox");
        paintBox.forEach(box => {
            box.addEventListener("mouseover",()=>{
                if (penType == 'color'){
                    box.style.opacity = "100%";
                    box.style.backgroundColor = `${brushColor.value}`;
                }
                
                else if (penType == 'random'){
                    box.style.opacity = "100%";
                    box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
                }
                else{
                box.style.cssText += `background-color:${brushColor.value} ; opacity:${(box.style.opacity * 100) + 10}% `
                }
            })
        });
    
}

function setWhiteButtonColor(btn1,btn2){
    btn1.style.cssText = "background-color:white;"
    btn2.style.cssText = "background-color:white;"
}
brushSize.addEventListener("change",generateDivs)


buttonColor.addEventListener("click",()=>{
    penType = 'color';
    buttonColor.style.backgroundColor = `${brushColor.value}`;
    sliderColor.style.accentColor = `${brushColor.value}`;
    setWhiteButtonColor(buttonRandom,buttonDarken);
})
buttonRandom.addEventListener("click",()=>{
    penType = 'random';
    buttonRandom.style.cssText = "animation: lightfade 1s ease-in-out 0.1ms infinite;";
    setWhiteButtonColor(buttonColor,buttonDarken);
})
buttonDarken.addEventListener("click",()=>{
    penType = 'darken';
    buttonDarken.style.backgroundColor = `${brushColor.value}`;
    setWhiteButtonColor(buttonRandom,buttonColor);
})

generateDivs();
