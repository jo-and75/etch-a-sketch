
const body = document.querySelector("body");   
const container = document.getElementById("container");   
const page = document.getElementById("page");  

body.setAttribute("style", "background-color:#754B2F")

page.setAttribute("style", "display:flex; justify-content:flex-end; color:")

function createGrid(size) {     

    const cellSize = 25;  
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
              row.style.backgroundColor = "#F3DBB2"; // Reset the color when mouse leaves
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

createGrid(16);







