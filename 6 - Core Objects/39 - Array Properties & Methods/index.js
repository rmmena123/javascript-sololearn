function main() {
  //take the number of passed levels
  var levels = parseInt(readLine(),10);
  var points = new Array();
  
  var count = 0;
  while(count<levels){
      var elem = parseInt(readLine(),10);
      points[count] = elem;
      count++;
  }
  
  var sum = 0;
  var i = 0;
  //calculate the sum of points
  while (i < levels) {
      sum += points[i];
      i++;
  } 
  
  //output
  console.log(sum);
}