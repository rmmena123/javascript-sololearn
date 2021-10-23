/*
Our box element is inside a container element. Note the position attribute used for the elements: the container is relative and the box is absolute. This will allow us to create the animation relative to the container.
*/

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
  var pos = 0; 
 //our box element
 var box = document.getElementById('box');
 var t = setInterval(move, 10);

 function move() {
     if(pos >= 150) {
         clearInterval(t);
     }
     else {
         pos += 1;
         box.style.left = pos+'px';
     }
 }
};