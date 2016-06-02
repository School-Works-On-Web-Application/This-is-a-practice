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
    paragraphs[0] = "<span class='firstSentence'>This is my first paragraph</span> and it is only visible in the first page." +
    "this second line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula libero vel nisi venenatis, id convallis libero molestie. Vestibulum porta placerat nisi vitae consequat. Mauris sit amet bibendum odio. Curabitur in lectus malesuada, convallis sem nec, sollicitudin massa. Maecenas eget bibendum quam. Donec tempus turpis a ante ullamcorper consequat eu eget justo. Maecenas id varius sem. Praesent tempus orci eget tempor bibendum. Etiam molestie turpis arcu, ac congue elit rhoncus sit amet."; 
    paragraphs[1] = "<span class='firstSentence'>This is my first paragraph</span> and it is only visible in the first page. Pellentesque porttitor lacus id nisl ullamcorper, rhoncus luctus velit eleifend. Aenean a porttitor lorem, id fermentum orci. Fusce tempus, neque sagittis rutrum semper, turpis eros vulputate lacus, at porttitor libero ante et quam. Duis ac mattis purus. Donec faucibus quam et sapien faucibus scelerisque nec sed magna. In finibus sit amet purus sit amet fermentum. Etiam quis consectetur purus. Vivamus laoreet euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed et ligula sit amet lectus egestas condimentum vel non ipsum. Etiam nibh mauris, iaculis eu interdum vel, luctus accumsan neque. Nullam a nisl in nunc pharetra semper non vel nunc. Duis quis augue erat. Aliquam consequat faucibus ipsum, a laoreet purus accumsan ut."; 
    paragraphs[2] = "<span class='firstSentence'>This is my first paragraph</span> and it is only visible in the first page. Integer eget libero pellentesque, varius odio eget, finibus lacus. Sed porta justo non ante aliquam, at suscipit dolor tempor. Nunc auctor feugiat fringilla. Vivamus pharetra orci non felis pellentesque, eget elementum neque ullamcorper. Cras quis lacus nec justo cursus laoreet. Praesent tempus, quam a faucibus finibus, justo enim fermentum lacus, nec ullamcorper libero purus eget ante. Suspendisse placerat augue at blandit tristique. Quisque eget euismod mi, sit amet vulputate libero. Ut massa nulla, mattis quis purus at, rutrum fermentum nisi. Vivamus ac cursus eros. Proin dignissim quis erat id viverra. Donec molestie arcu quis sagittis sodales. Maecenas tempor risus semper posuere ultricies. Fusce at nisi nec odio iaculis posuere."; 
    
    var paragraphElementsLength = paragraphElements.length - 1; 
    for (var index = paragraphElementsLength; index >= 0; index--) {
  
        if(paragraphElements[index]) {
        paragraphElements[index].innerHTML = paragraphs[index]; 
        }
    }

    
})();