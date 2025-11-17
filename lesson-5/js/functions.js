/* STEP 1: Basic browser functions
There are a number of functions that are included with most modern browsers - the replace() function is just one of many */
let text = "Functions are awesome!";
let newText = text.replace('awesome', 'great');
console.log(text);
console.log(newText);

// Interestingly, functions that are included with your browser are technically called 'methods' rather than functions.
function makeH1Color() {
    const h1 = document.querySelector('h1');
    h1.style.color = 'rgb(150, 50, 0)';
}
makeH1Color();

/* STEP 2: Anonymous versus named functions */
// Anonymous
const step2Button = document.querySelector('#step2');
//step2Button.onclick = function() {
//    alert('Anonymous function is called');
    //alert does the pop-up confirmation window thing
//}
// Named function - does the same thing as the Anonymous above
function step2Alert() {
    confirm('Is this your JS Class?');
}
step2Button.onclick = step2Alert;

/* STEP 3: Function parameters
Some methods or functions don't require any parameters (sometimes called arguments, properties, or attributes), while some do, and others are optional. */
// No parameters needed
let random = Math.random();//different number from 0-1
console.log(random);

// Two parameters needed
let functionText = 'My random number is X';
let newFunction = functionText.replace('X', random); //something needing changed, and something to change it with
console.log(newFunction);

// Parameters optional
let lunchArray = ['sandwich', 'bagel', 'orange'];
let lunch = lunchArray.join(', '); //default separator is ',' with no space
console.log(lunch);

//Traditional function
function add(x, y) {
    return x + y;
}
console.log(add(4, 9));
//Arrow function
/*const functionName = (parameters) {
    function body
}*/
const addArrow = (x, y) => x + y;
console.log(addArrow(6, 8));

//callback functions
//function that is passed as an argument of another function
function greet(name, callback) { //function that accepts a callback
    console.log("Hello " + name + "!");
    callback();
}
//define callback
function sayGoodbye() {
    console.log("Goodbye!");
}
greet("Megan", sayGoodbye);
//Asynchronous Callback function
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched from server");
        callback();//need to call the callback to make the second function run
    }, "2000");
}
fetchData(() => {
    console.log("Processing data");
});

// Next, open up scope.html and we will look at how the accessibility of variables depends on where they are defined/initialized.

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions