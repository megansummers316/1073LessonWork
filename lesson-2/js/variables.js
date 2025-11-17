/* STEP 1: Declare variables (declaration ONLY)
Use a-z, 0-9, A-Z and underscores, avoiding reserved names
All program variables are generally declared at the beginning */
let myName;
let myAge;
let string;
//writing these to the screen would return "undefined" but continue working
console.log(myName);
let para = document.querySelector('body p');
//you can extract combinators as well

/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */
myName = 'Megan';
myAge = 24;
console.log(myAge);

/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */
myName = 'Meg';
console.log(myName);
string = 'My name is ' + myName + " and my age is " + myAge;
para.textContent = string;

// STEP 4: Variable types (use typeof in the console)
// Numbers
let num = 1073;
para.textContent = num;
console.log(typeof(num));

// Strings (use '' or "")
let string2 = 'Client-Side JavaScript';
para.textContent += " " + string2;
console.log(typeof(string2));

// Booleans
let alive = true;
let compare = 3 > 6;
console.log(alive + ' ' + compare);

// Arrays
let myArray = ['Bob', 'John', 'Fred'];
console.log(myArray[0]);

// Objects
//everything is an object is JavaScript
let dog = {
    //object members - properties or methods
    dogName : 'Georgie',
    breed : 'Poodle',
    colour : 'White'
}
//objects start with the {}
console.log(dog.colour);
//must call object.variableName to access properties of the object

// STEP 5: Typing (JavaScript is a loosely-typed language)
let x = 5;
x = 'Greg';
x = true;
console.log(x);
//loosely-typed meaning the variable type is not set indefinitely, it can change with the varaible