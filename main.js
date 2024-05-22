
const body = document.querySelector("body");   
const container = document.getElementById("container");   

const gridSize = document.createElement("button");   
gridSize.setAttribute("style", "display:flex;align-self: auto;")
body.appendChild(gridSize); 

gridSize.addEventListener("click", () => { 
    let userInput = prompt("Please enter a new grid size. Should be less than 100");  
    let userNumber = parseInt(userInput); 

    if(userNumber > 0 && userNumber < 100){ 
        createGrid(userNumber);
    }else if(typeof userNumber === "Number" && (userNumber < 0 || userNumber > 100))  { 
        alert("The input should be greater than 0 and less than 100.");
    }else{ 
        alert("The input was not a valid number.");
    }

})

const page = document.getElementById("page"); 
page.setAttribute('style', "border: solid green;")






body.setAttribute("style", "display:flex; flex-direction: column-reverse; gap: 60px; border: solid blue; width: 100vh; height: 100vh; justify-content: center; align-items: center; background-color:#754B2F")



//const gridSize = prompt(parseInt())


function createGrid(size) {     

    const cellSize = 10;  
    const containerWidth = size * cellSize;
    const containerHeight = size * cellSize;  

    for(let i = 0; i < size ; i++){    
    const column = document.createElement("div"); 
    column.setAttribute("style","display: flex; flex-direction: column; box-sizing: border-box; border:0; "); 
    container.appendChild(column);   

        for (let j = 0; j < size; j++){  
            const row = document.createElement("div"); 
            row.setAttribute("style",`height:${cellSize}px ; width: ${cellSize}px; box-sizing: border-box;transition: background-color 0.3s;`); 

            row.addEventListener("mouseenter", () => { 
                 row.style.backgroundColor = "#754B2F"; // Change the color on hover
            });
            row.addEventListener("mouseleave", () => {
              row.style.backgroundColor = "#754B2F"//"#F3DBB2"; // Reset the color when mouse leaves
            });
            column.appendChild(row);
        }
    }   

    container.style.display = "flex";  
    container.style.width = containerWidth + "px"; // Need to add px cause css dictates unit needs to be defined
    container.style.height = containerHeight + "px";   
    container.style.border = "solid purple";       
    container.style.backgroundColor = "#F3DBB2"
}

//createGrid(16);







