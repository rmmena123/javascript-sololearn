var score = parseInt(readLine(), 10)
/*
88 and above => excellent
40-87   => good
0-39 => fail
*/

if (score >= 88) {
    console.log("excellent");
}

else if (score >= 40 && score <= 87) {
    console.log("good");
}

else {
    console.log("fail");
}

// ---

function main() {
  var totalPrice = parseInt(readLine(), 10)
  
  if(totalPrice >= 5000) {
      console.log("50%");
  }

  else if(totalPrice >= 3000 && totalPrice <= 4999) {
      console.log("30%");
  }

  else if(totalPrice >= 1000 && totalPrice <= 2999) {
      console.log("10%");
  }

  else {
      console.log("0%");
  }
  
}

