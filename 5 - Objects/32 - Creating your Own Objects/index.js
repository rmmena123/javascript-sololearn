// this -> poder utilizar o new
function main() {
  //take flight number and its status
  var flightNumber = readLine();
  var flightStatus = readLine();
  
  var flight1 = new Flight(flightNumber, flightStatus);
  //assign a flight object to flight1 variable

  //output
  console.log('The flight ' + flight1.number + ' is ' + flight1.status)
}

function Flight(flightNumber, status) {
  //fix the constructor
  this.number = flightNumber;
  this.status = status;
};