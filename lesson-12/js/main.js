// Get CANVAS element ready to draw on
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let canvasWidth = canvas.width = window.innerWidth;
let canvasHeight = canvas.height = window.innerHeight;

// Function to generate random number
function random(min,max) {
	let num = Math.floor(Math.random()*(max-min)) + min;
	return num;
}

// STEP 1: Create a constructor function for a ball

	// STEP 2: Add the draw() method to the Ball class built above

		// STEP 2a: Get ready to draw with the pen
		
		// STEP 2b: Determine color of pen to draw with
		
		// STEP 2c: Decide on size of circle to draw
		
		// STEP 2d: Actually draw on the canvas
		
	
	// STEP 3: Include an update() method to the Ball class
	
		// STEP 3a: Check for collision with right or left edge of screen
		
			// STEP 3b: Ball has hit the left or right edge of the canvas, so reverse the direction of travel
			
		
		// STEP 3c: Check for collision with top or bottom edge of screen
		
			// STEP 3d: Ball has hit the top or bottom edge of the canvas, so reverse the direction of travel
			
		
		// STEP 3e: Move the ball each time this method is called
		
	


// STEP 4: Create an array to contain all the balls


// STEP 5: Build the animation loop

	// STEP 5a: Paint a black rectangle over top of the old canvas drawing
	

	// STEP 5b: Create up to 25 randomly colored balls, and push each one to the balls array...
	

	// STEP 5c: For each ball object instance, draw it and update it
	

	// STEP 5d: Use the requestAnimationFrame to loop
	


// STEP 6: Call the animation loop() function to get things rolling


/* Read the full tutorial (which also includes collision detection) at MDN available at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice */
