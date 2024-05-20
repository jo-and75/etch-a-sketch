const body = document.querySelector("body");   
const container = document.getElementById("container");  

container.setAttribute("style", "border: solid purple; display:flex;") 



function createGrid(size) {  

    const containerWidth = size * 25;
    const containerHeight = size * 25;

    container.style.width = containerWidth + "px"; // Need to add px cause css dictates unit needs to be defined
    container.style.height = containerHeight + "px";   



    for(let i = 0; i < size ; i++){    
    const column = document.createElement("div"); 
    column.setAttribute("style","display: flex; flex-direction: column; box-sizing: border-box; border: solid black;"); 
    container.appendChild(column);   

        for (let j = 0; j < size; j++){ 
            const row = document.createElement("div"); 
            row.setAttribute("style","border: solid black; height: 25px; width: 25px; margin: 0; padding: 0; box-sizing: border-box;"); 
            column.appendChild(row);
        }
    }  
}

createGrid(16)

body.setAttribute("style", "background-color:#771011;") 



