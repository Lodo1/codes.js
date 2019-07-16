 function max(a,b) {
 	if (a>b) {
 	return a; }
 		else{
 			return b;
 		}
 }
 var c = max(1,4);

 alert(c);
 var name = prompt(" what is your name");
alert(name);
var party= confirm( "are you coming to my birthday party ?");
if (party == true ){
	alert( " i cant wait to see you  , i am really happy ");
}
else  {
	alert(" oh  wr=e will miss you very much ");
}
// Basic Data Types and Functions Worksheet

// Problem One:
// The number type represents both integer and floating point numbers.
// There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

// 1. Assign a variable n to a number
// 2. Log the variable n to the console
// 3. Reassign n to a new number
// 4. Log the variable n into the console again, what happens?
// 5. Try logging into the console different operations you can perform on n

var n = 5;
console.log(n);
var n = 17;
console.log(n);
// addition
console.log(n + 1);
// multiplication
console.log(n * 5);
// square root
console.log(Math.sqrt(n));

// Problem Two:
// A string in JavaScript must be surrounded by quotes. In JavaScript, there are 3 types of quotes.
// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.
// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

// 1. Assign a variable to a string of your choosing
// 2. Log this variable into the console.
// 3. Try adding a number to the your variable, what happens? Why do you think this happens?
// 4. Try adding another string to your variable, what happens? Why do you think this happens
// 5. Console log a string and add the value of the variable n from the previous problem, did you use the addition symbol or backticks? Try both

var name2 = "Arwa";
console.log(name2);
console.log(name2 + 6 + "Hello");
console.log(name2 - 6);

console.log("Khalil" + " Handal");



// Problem Three:
// The boolean type has only two values: true and false.
// 1. This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
// 2. Have a variable set to true, then in the next line, set the same variable to false
// 3. Talk to the person next to you on when and why would we use true or false in javascript

function defineIsStudent () {
	isStudent = true;
	console.log(isStudent);
	isStudent = false;
	console.log(isStudent);
}

defineIsStudent();


function sayHello() {
	console.log("test", isStudent);
	if (isStudent === true) {
		console.log("Hello student!");
	} else {
		console.log("Goodbye, you're not a student!");
	}
}

console.log(sayHello());


// Problem Four:
// The special null value does not belong to any of the types described above.
// It forms a separate type of its own which contains only the null value:

// The special value undefined also stands apart. It makes a type of its own, just like null.
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined

// 1. Declare a variable with a name of your choosing to null
// 2. Declare a variable with the name of your choosing but 
// do not assign it to anything, try to log this into the console, what appears?
// 3. Discuss with a partner when would we use null, undefined?
var x1 = null;
var x2;

console.log(x1);
console.log(x2);





// Problem Five:
// The object type is special.
// All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities. 

// 1. Create an object of yourself with your own properties
// 2. Try to log into the console the object
// 3. Can you log individual attributes? How?
// 4. Which situations would it be better to use an object rather than a primitive type of variable data type? When would it be better to use a primitive data type rather than an object? Discuss with a partner

var student = {
	age: 14,
	grade: "freshman",
	id: 2000
}

console.log(student);
console.log(typeof student);
console.log(student.grade);
console.log(student.id);
console.log(student["age"]);

// Extra Credit:
// What is the output for the code below?

// let name = "Khader";
// console.log(`hello ${1}`);

// console.log(`hello ${"name"}`);

// console.log(`hello ${name}`);



// Topic 4: Functions

// Write addition function using declaration






// Write multiplication function using expression







// Extra Credit: 

// How might you replicate the rock-paper-scissors game that we played yesterday in class?
// Work with a teammate on this question, and we'll review in class





