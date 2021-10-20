function main() {
    var hour = parseInt(readLine(), 10);

    if(hour >= 0 && hour <= 12) {
        console.log("am");
    }

    else {
        console.log("pm");
    }
}

// variable = (condition) ? value1: value2 

function main() {
    var numberVolunteers = parseInt(readLine(), 10)
    var groupsVolunteers = numberVolunteers % 5;
    var addVolunteers = (groupsVolunteers == 0) ? 0 : (5 - groupsVolunteers);

    console.log(addVolunteers);
}