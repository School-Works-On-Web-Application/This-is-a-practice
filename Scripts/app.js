//Java script goes here
//IIFE 

(function(){
    "use strict"; 
    
    console.log("app is running :)"); 
    
    var paragraphElements = []; 
    
    
    paragraphElements[0] = document.getElementById("paragraphOne"); 
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
    

    // Define your paragraph array
    var paragraphs = []; 
    
    
    // Data for my pages..
    paragraphs[0] = "This is my first paragraph and it is only visible in the first page." +
    "this second line"; 
    paragraphs[1] = "This is my first paragraph and it is only visible in the first page."; 
    paragraphs[2] = "This is my first paragraph and it is only visible in the first page."; 
    
    for (var index = 0; index < paragraphElements.length; index++) {
        if(paragraphElements[index]) {
        paragraphElements[index].textContent = paragraphs[index]; 
        }
    }

    
})();