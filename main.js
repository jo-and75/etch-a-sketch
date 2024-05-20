const body = document.querySelector("body");   
const container = document.getElementById("container");


for(let i =0; i < 16 ; i++){  
    const leftDivs = document.createElement("div");
    leftDivs.setAttribute("style", "border:solid; height:25px; width:25px; margin: 0; padding:0")  
    //Initially didn't work because divs were being created and not appended to the DOM after each loop so appendment had to be added in the loop. 
    container.appendChild(leftDivs);
}

body.setAttribute("style", "background-color:#771011;")



