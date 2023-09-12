// chapter math expression {2}


// question {1}



++x;

x = x + 1;

console.log ("x")

// question {2}


x = x - 1;

x--;



// question {3}



var x = 50;
var y = x++;

console.log(y)


// question {4}


var y = 50;

var z = --y;

console.log(z)


// question {5}

var newnum = num--;


// question {6}


var newVariable = ++oldVariable;


// question {7}


var num = 5;

num ++;

alert("the new value is: " + num)


// chapter math expression {3}

// 1.

var calculatednum = 2 + (2 * 6);

console.log(calculatednum)

// 2.

var calculatednum = (2 + 2) * 6;

console.log(calculatednum)

// 3.

var calculatedNum = (2 + 2) * (4 + 2);

// 4.

var calculatedNum = ((2 + 2) * 4) + 2;

// 5.

var cost = 2 + 2 * 4 + 10;

// 6.

var units = 2 + 2 * 4 + 10;

// 6.

var pressure = 4 / 2 * 4;

// Chapter 8 (Concatenating Text Strings)

// 1.

var num = "2" + "2";

// "22"

// 2.

var message = ("Hello," + "Dolly");

alert(message);

// 3.

alert("33" + 3);

//  4.

var first = "Pakistan";
var sec = "Zindabad";
var concatenatedString = first + sec;
alert(concatenatedString);

// 5.

var stringValue = "Hello";
var numberValue = 42;
var concatenatedValue = stringValue + numberValue;
alert(concatenatedValue)

// 6.

var firstString = "Hello, ";
var secondString = "world!";
var concatenatedString = firstString + secondString;

console.log(concatenatedString);

// Chapter 9 (Prompts)

// 1.

var firstName = prompt("Enter first name");

console.log("First Name: " + firstName);

// 2.

var country = prompt("Country?", "China");

console.log("Country: " + country);

// 3.

var yourName = prompt("Enter Your Name");

// 4.

var userInput = prompt("Please enter your favorite color:", "Red");

console.log("User Input: " + userInput);

// 5.

var promptMessage = "Enter your email:";
var defaultEmail = "example@example.com";

var userEmail = prompt(promptMessage, defaultEmail);

console.log("User Email: " + userEmail);

// 6.

var promptMessage = "Please enter your name:";
var defaultName = "Shabbir";

var userName = prompt(promptMessage, defaultName);

alert("You entered: " + userName);


// Chapter 10 (if statments)

// 1. 

var city = "Karachi";
if (city === "Karachi") {
  console.log("The City Of Lights");
}

// 5.

// Prompt the user for their first name
var enteredName = prompt("Please enter your first name:");

// Define the other name for comparison
var otherName = "John"; // You can change this to the name you want to compare

// Check if the enteredName is not equal to otherName
if (enteredName !== otherName) {
  // If the condition is true, display an alert
  alert("No match");
} else {
  // If the condition is false, you can optionally do something else
  alert("Names match!");
}




