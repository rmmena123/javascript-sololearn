var height = parseFloat(readLine(), 10)

if(height > 2.45) {
    console.log("new record");
}

else {
    console.log("not this time");
}

// ---

function main() {
  var numberGuests = parseInt(readLine(), 10)
  
  if(numberGuests % 2 == 0) {
      console.log("Right");
  }

  else {
      console.log("Wrong");
  }
  
}