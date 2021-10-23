function main() {
  var depth = parseInt(readLine(), 10);
  var result = 0;
  var number_days = 0;

  while(result < depth) {
      result = result + 7;
      number_days++;

      if(result >= depth) {
          break;
      }

      result = result - 2;
  }

  console.log(number_days);
}
