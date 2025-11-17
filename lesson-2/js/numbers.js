/* STEP 1: Number types (integer, float, and double)
declare and initialize an integer and a float, then in the console, reveal the number type with typeof(varName) */
let output = document.querySelector('body p');
let myInt = 10;
let myFloat = 5.6568;
console.log(typeof(myFloat));
let typeTest = typeof(myFloat);
//output.textContent = typeTest;
// Note - there are also different number systems: binary, octal, and hexadecimal
let binNum = 0b0101;
console.log(binNum);

let octNum = 0o12;
console.log(octNum);

let hexNum = 0xA;
console.log(hexNum);


/* STEP 2: Arithmetic operators
+ (addition), - (subtraction), * (multiplication), / (division), % (remainder or modulo), ** (exponent) */
let s2a = 5 % 3;
console.log(s2a);

// Try declaring and initializing a couple of variables as numbers
let n1 = 50;
let n2 = 90;
let s2b = (90 + 50) * 2 - 7;
console.log(s2b);

/* OR… num1 * num2 / 8 + 2 - 0.5; */

/* Keep in mind operator precedence, just like you were taught in math class (/, *, +, -)
num1 + num2 * 5 - 25 ... is not 575 ... it is 215 */

/* If you want to avoid this precedence, use parenthesis
(num1 + num2) * 5 - 25 */

/* STEP 3: Increment and decrement operators
++ and -- are mostly found inside loops to move a counter variable to the next value when needed, either up or down. */
let s3 = 5;
let preIncrement = ++s3;
console.log(preIncrement);

let postIncrement = ++s3;
console.log(postIncrement);

// Note 1 - you cannot increment/decrement a number directly
// Note 2 - typing num++ or num-- in the console will output the number before incrementing or decrmenting - try ++num or --num, instead

/* STEP 4: Assignment Operators
= (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) */
let s4a = 15;
s4a /= 2;
console.log(s4a);

/* STEP 5: Comparison Operators
===	(strict equality), !==	(strict-non-equality), == (equality), < (less than), > (greater than), <= (less than or equal to), >=	(greater than or equal to) */
let a2 = 2;
let b2 = '2';
console.log('Using == ' + (a2 == b2));
console.log('Using === ' + (a2 === b2));
