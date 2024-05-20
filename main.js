const body = document.querySelector("body");   
const container = document.getElementById("container"); 

const frameUp = document.createElement("div");   
const frameDown = document.createElement("div"); 
const frameLeft = document.createElement("div"); 
const frameRight = document.createElement("div"); 


frameUp.setAttribute("style", "border:solid green; display:flex; justify-content:center;") 
frameLeft.setAttribute("style","border: solid blue; display:flex; flex-direction:column; align-items: flex-start;")

container.setAttribute("style", "border: solid purple; margin-left: 620px; margin-right: 300px") 



for(let i =0; i < 16 ; i++){   


    const topDivs = document.createElement("div");
    topDivs.setAttribute("style", "border:solid; height:25px; width:25px; display:flex; flex-direction:row;");
    frameUp.appendChild(topDivs);    
    container.appendChild(frameUp)

    
    const leftDivs = document.createElement("div");
    leftDivs.setAttribute("style", "border:solid; height:25px; width:25px;display:flex-direction: column;");  
    frameLeft.appendChild(leftDivs);
    container.appendChild(frameLeft); 

    /*
    const rightDivs = document.createElement("div");
    rightDivs.setAttribute("style", "border:solid; height:25px; width:25px; display:flex; flex-direction:column;");
    container.appendChild(rightDivs);  

    const bottomDivs = document.createElement("div");
    bottomDivs.setAttribute("style", "border:solid; height:25px; width:25px; flex-direction:row; align-items:flex-end;");
    container.appendChild(bottomDivs);  
   */
}

body.setAttribute("style", "background-color:#771011;") 

top.setAttribute("style","display:flex; border:solid green;")


