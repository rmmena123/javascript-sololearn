<body onload="doSomething()">
</body>

function change() {
  var x = document.getElementById('name');
  x.value = x.value.toUpperCase();
}

// element.addEventListener(event, function, useCapture);

element.addEventListener("click", myFunction);
element.addEventListener("mouseover", myFunction);

function myFunction() {
  alert("Hello World!");
}

element.removeEventListener("mouseover", myFunction);