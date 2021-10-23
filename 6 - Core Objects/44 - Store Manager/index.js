function main() {
  var increase = parseInt(readLine(), 10);
  var prices = [98.99, 15.2, 20, 1026];
  var i = 0;
  //your code goes here
  while(i != prices.length) {
      prices[i] += increase;
      i++;
  }

  console.log(prices);
}