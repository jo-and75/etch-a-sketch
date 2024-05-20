const body = document.querySelector("body");   
const container = document.getElementById("container");  

container.setAttribute("style", "border: solid purple; display:flex;") 



function createGrid(size) {  

    const containerWidth = size*25;
    const containerHeight = size*25;

    container.style.width = containerWidth + "px"; // Need to add px cause css dictates unit needs to be defined
    container.style.height = containerLength + "px";   



    for(let i = 1; i < size ; i++){    
    const column = document.createElement("div"); 
    column.setAttribute("style","border: solid black; height: 25px; width: 25px;"); 
    container.appendChild(column);   

        for (let j = 1; j <= size; j++){ 
            const row = document.createElement("div"); 
            row.setAttribute("style","border: solid black; height: 25px; width: 25px;"); 
            column.appendChild(row);
        }
    }  
}

createGrid(16)

body.setAttribute("style", "background-color:#771011;") 



