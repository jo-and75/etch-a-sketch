
const body = document.querySelector("body");   
const container = document.getElementById("container");    
const buttons = document.getElementById("buttons"); 

buttons.setAttribute("style","display: flex; justify-content: space-between; width:200px; border: solid pink")

const gridSize = document.createElement("button");    
gridSize.textContent = "Create Grid"; 
const resetGrid = document.createElement("button"); 
resetGrid.textContent = "Reset Grid";
gridSize.setAttribute("style", "display:flex;align-self: auto;")

buttons.appendChild(gridSize); 
buttons.appendChild(resetGrid); 


gridSize.addEventListener("click", () => { 
    let userInput = prompt("PLEASE ENTER A NEW GRID SIZE. INPUT SHOULD BE LESS THAN 71");  
    let userNumber = parseInt(userInput); 

   if(!isNaN(userNumber) && typeof userNumber === "number"){ 
        if(userNumber > 0 && userNumber < 71){   
            container.innerHTML = "";// Removes all child elements effectively reseting grid each time button is clicked.
            createGrid(userNumber);
        }else { 
            alert("THE INPUT SHOULD BE LESS THAN OR EQUAL TO 70.");
        }
    }else{ 
        alert("THE INPUT SHOULD BE A VALID NUMBER.");
    } 

    resetGrid.addEventListener("click", ()=> { 
        container.innerHTML = "";  
        createGrid(userNumber); 
        //alert("GRID HAS BEEN RESET, YOU CAN HOVER OVER IT AGAIN")
        
    })
    /* 

    The !isNaN check is crucial because parseInt can return NaN (Not-a-Number) if the input is not a valid number or if the input string does not contain 
    any numeric characters that can be converted to a number.

    Even if typeof userNumber is "number", it could still be NaN, which represents an invalid number. 
    Therefore, we need to check both that the type is "number" and that the value is not NaN. Here’s a detailed explanation of why each check is necessary:

    typeof userNumber === "number": This ensures that userNumber is of type number. However, this alone is not sufficient because NaN is also of type number.

    !isNaN(userNumber): This ensures that userNumber is a valid number and not NaN. The isNaN function checks whether a value is NaN.

    Together, these checks ensure that userNumber is a valid number and not NaN. 

    */
}) 

function generateRandomColor() {
    // Step 1: Generate random RGB values
    const red = Math.floor(Math.random() * 256); // Random integer between 0 and 255
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Step 2: Combine RGB values into a CSS color string
    const randomColor = `rgb(${red}, ${green}, ${blue})`;

    return randomColor; // Return the generated color string
}






const page = document.getElementById("page"); 
page.setAttribute('style', "border: solid green;")
body.setAttribute("style", "display:flex; flex-direction: column; gap: 60px; border: solid blue; width: 100vw; height: 100vh; justify-content: center; align-items: center; background-color:#fefae0")


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
                 row.style.backgroundColor = generateRandomColor(); // Change the color on hover
            });
            row.addEventListener("mouseleave", () => {
              row.style.backgroundColor =generateRandomColor(); // Reset the color when mouse leaves
            });
            column.appendChild(row);
        } 
        
    }   

    container.style.display = "flex";  
    container.style.width = containerWidth + "px"; // Need to add px cause css dictates unit needs to be defined
    container.style.height = containerHeight + "px";   
    container.style.border = "solid purple";       
    container.style.backgroundColor = "white"
}

//createGrid(16);







