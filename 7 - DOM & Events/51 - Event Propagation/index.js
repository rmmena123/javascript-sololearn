// Capturing goes down the DOM. -> true
// Bubbling goes up the DOM. -> false

// addEventListener(event, function, useCapture)

//Capturing propagation
elem1.addEventListener("click", myFunction, true); 

//Bubbling propagation
elem2.addEventListener("click", myFunction, false);