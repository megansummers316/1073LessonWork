const output = document.querySelector('body p:nth-of-type(2)');
		
/* STEP 1a: A simple if/else statement */
let homeWorkDone = false;
let breakDuration = 0;

if (homeWorkDone === false) {
	breakDuration = 10;
	console.log("The break duration is " + breakDuration + " minutes as homework is not done");
}
else {
	breakDuration = 45;
	console.log("The break duration is " + breakDuration + " minutes as homework was completed successfully");
}

// STEP 1b: Any value that is not false (undefined, null, 0, NaN, or an empty string) will evaluate to TRUE when tested using a conditional statement - try a few other values for var homeWorkDone and test
console.log(typeof(NaN));
let result = "Hello" - 2; //this will return NaN
console.log(isNaN("abc")); //returns true as it is not a number
console.log(Number.isNaN("abc")); //returns false
console.log(isNaN(123)); //returns false 
//NaN - not a number
//indexOf(NaN) will return -1 in an array of numbers has NaN cannot be a number so the program gets confused
console.log(NaN === NaN); //returns false

/* STEP 2: The more complex if|elseif|else */
const page = document.querySelector('html');
const select = document.querySelector('select');
const icon = document.querySelector('#weatherIcon');
const temp = document.querySelector('#temp');
const weatherButton = document.querySelector('#weatherButton');
const comments = document.querySelector('#commentary');

/* STEP 2a: Add an event listener for the 'click' event on the 'Set Weather' button that invokes the setWeather() function below */
weatherButton.addEventListener('click', setWeather); //do NOT put brackets when telling the EventListener which function it should call

function setWeather() {
	let choice = select.value;
	let temperature = temp.value;
	/* STEP 2b: Craft an IF/ELSEIF/ELSE that changes the src attribute of the icon element to the appropriate .svg file in the images folder */
	//if (choice === 'sunny') {
	/* STEP 3: Add a nested IF/ELSE statement inside the 'sunny' condition above that tests for temperature, and if it is equal to or greater than 15, turn the page background orange, otherwise turn it lightblue */
		/*icon.setAttribute('src', 'images/sunny.svg');
		//check the temperature
		if (temperature >= 15) {
			//it is warm, change page colour
			page.style.backgroundColor = 'Orange';
		} else {
			page.style.backgroundColor = 'lightBlue';
		}
	}
	else if (choice === 'rainy') {
		icon.setAttribute('src', 'images/rainy.svg');
	}
	else if (choice === 'windt') {
		icon.setAttribute('src', 'images/windy.svg');
	}
	else {
		icon.setAttribute('src', 'images/night.svg');
	}*/
	/* STEP 4: Logical operators - and, or, not (delete multi-line comment delimiters below) */
	// STEP 4a: AND - && (It's sunny AND it's at least 15deg)
	
	if (choice === 'sunny' && temperature >= 15) {
		comments.textContent = 'It is sunny and warm — time to find your sunglasses!';
	// STEP 4b: AND, once again - && (It's sunny AND it's less than 15deg)
	} else if (choice === 'sunny' && temperature < 15) {
		comments.textContent = 'It is sunny out there, but it is a bit cool.';
	// STEP 4c: OR - || (It's windy OR rainy)
	} else if (choice === 'windy' || choice == 'rainy') {
		comments.textContent = 'The weather today is a bit unsettled.';
	} else {
		comments.textContent = 'You did not specify the type of weather, today.';
	}
	// STEP 4d: NOT - ! (It's NOT rainy)
	if (choice !== 'rainy') {
		comments.textContent += ' No sign of rain.';
	}

	// Weather icons by Cole Bemis - https://feathericons.com/, MIT, https://commons.wikimedia.org/w/index.php?curid=60153354

} // End of setWeather() function

/* STEP 5: Switch statements
Sometimes listing a series of conditions and the code that might be executed in each case is the friendliest way to structure your conditional */

const windSpeed = document.querySelector('#windSpeed');
const windComment = document.querySelector('#windComment');

windSpeed.addEventListener('change', getWindSpeed);

function getWindSpeed() {
let speed = Number(windSpeed.value);
// STEP 5a: Build the SWITCH code block
	switch(speed) {
	// STEP 5b: Build out four cases, followed by a default
		case 100:
			// 100 km/h
			windComment.textContent = speed + 'km/h - Holy schmoly! Hold on to your hat!';
			break; //if you don't put break in, it will keep running through each section that is true - DO NOT FORGET THE BREAK
		case 75:
			// 75 km/h
			windComment.textContent = speed + 'km/h - It\'s a-howling out there!';
			break;
		case 50:
			// 50 km/h
			windComment.textContent = speed + 'km/h - Quite gusty out there, today.';
			break;
		case 25:
			// 25 km/h
			windComment.textContent = speed + 'km/h - A wee bit breezy.';
			break;
		default:
			windComment.textContent = speed + " nothing.";
	}
} // End of getWindSpeed() function


/* STEP 6: Ternary operator
This piece of syntax is a bit less typing, but it is harder to read */
let breakMessage = document.querySelector('#breakTime');
let coffeeBreak = false;

//quick if-statments
//condition ? true statement : false statement
coffeeBreak ? breakMessage.textContent = 'Break Time!' : breakMessage.textContent = 'Keep working :)';

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
