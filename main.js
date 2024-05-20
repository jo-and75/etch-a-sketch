const body = document.querySelector("body");   
const container = document.getElementById("container");  

container.setAttribute("style", "border: solid purple; display:flex; width:auto; height: auto;") 


function createGrid(size) { 
    for(let i = 1; i < size ; i++){    
    const column = document.createElement("div"); 
    column.setAttribute("style","border: solid black; height: 30px; width: 30px;"); 
    container.appendChild(column);   

        for (let j = 1; j <= size; j++){ 
            const row = document.createElement("div"); 
            row.setAttribute("style","border: solid black; height: 30px; width: 30px;"); 
            column.appendChild(row);
        }
    }  
}

createGrid(16)

body.setAttribute("style", "background-color:#771011;") 



