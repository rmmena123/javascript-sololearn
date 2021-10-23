function contact(name, number) {
  this.name = name;
  this.number = number;
  this.print = print;
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);

function print(contact) {
  console.log(contact.name + ": " + contact.number);
}

a.print(a);
b.print(b);