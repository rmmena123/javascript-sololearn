function main() {
  var r = parseInt(readLine(), 10)
  
  //the output
  console.log(calcCirc(r).toFixed(2));
  
}

//complete the function
function calcCirc(r){
  return 2 * Math.PI * r;
}