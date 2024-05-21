const body = document.querySelector("body");   
const container = document.getElementById("container");   
const page = document.getElementById("page");  


page.setAttribute("style", "display:flex; justify-content:flex-end;")

function createGrid(size) {     

    for(let i = 0; i < size ; i++){    
    const column = document.createElement("div"); 
    column.setAttribute("style","border: solid black;display: flex; flex-direction: column; box-sizing: border-box;"); 
    container.appendChild(column);   
        }
    }      
  
createGrid(16);





