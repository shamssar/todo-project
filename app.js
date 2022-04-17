var person = prompt("Please enter your name");

var gender = prompt("Enter your gender please?");

if (gender == "male" ) {
    console.log("welcome Mr");

} else if (gender == "female" ) {
    console.log("Welcome Ms");
} else {
    alert("Please enter valid gender");
}

//let txt = (gender == "male") ? console.log("Hello Mr" + person) : console.log("Hello Ms" + person);

var userAge = prompt("What is your age?");



if (userAge <= 0) {
    alert("your Age Not Valid");
    
} else { (userAge > 0) 
    alert("Do you want to skip the welcoming message?");}
 





if (gender == "male" ) {
    alert("Welcome to our website Mr " + person);

} else if (gender == "female" ) {
    alert("Welcome to our webiste Ms " + person);
} else {
    alert("Welcome to our website " + person);
}