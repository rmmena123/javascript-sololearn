function main() {
  var eventExample = readLine();

  setReminder(eventExample)
}

function setReminder(event) {
  console.log("You set a reminder about " + event);
};

function main() {
  var salaryAmount = parseInt(readLine(), 10);

  getSavings(salaryAmount);
}

function getSavings(salary) {
  console.log(salary * 0.15);
};