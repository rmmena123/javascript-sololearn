var expression = readLine();

for(i = 0 ; i < 3; i++) {
    console.log(expression);
}

// ---

for(i = 1; i<=6; i++) { 
    var pagesPerMinute = 20 * i;
    console.log(pagesPerMinute); 
}

// ---

function main() {
  var number = parseInt(readLine(), 10)
  var factorial = 1;
  
  for(i = 1; i <= number; i++) {
      factorial *= i;
  }

  console.log(factorial);
}

