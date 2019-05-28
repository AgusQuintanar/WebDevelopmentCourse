var age;

function checkDriverAge(age) {
    if (Number(age) < 18)  return "Sorry you are too young to drive this car. Powering off";
    else if (Number(age) > 18)  return "Powering On.joy the ride!";
    else    return "Congratulations on your first year of driving. Enjoy the ride!";
}


console.log("Driver 1");
console.log(checkDriverAge(prompt("What is your age?")));
console.log("Driver 2");
console.log(checkDriverAge(19));