// Get CANVAS element ready to draw on
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let canvasWidth = canvas.width = window.innerWidth;
let canvasHeight = canvas.height = window.innerHeight;

// Function to generate random number
function random(min,max) {
	let num = Math.floor(Math.random()*(max-min)) + min;
	return num;
	/* 
	min = 10; max = 20;
	max - min = 10
		--> 0 to 9.99999 --> 0 to 9 --> 10 to 19 (shifted by min)
	*/
}
//STEP 1: Create a contrustor function for a ball
function Ball(x, y, velX, velY, color, size) {
	this.x = x;
	this.y = y;
	this.velX = velX;
	this.velY = velY;
	this.color = color;
	this.size = size; //radius of the ball
}
// STEP 2: Add the draw() method to the Ball class built above
Ball.prototype.draw = function() {
	ctx.beginPath();
	ctx.fillStyle = this.color;
	ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
	ctx.fill();
	ctx.closePath();
}
		// STEP 2a: Get ready to draw with the pen
		
		// STEP 2b: Determine color of pen to draw with
		
		// STEP 2c: Decide on size of circle to draw
		
		// STEP 2d: Actually draw on the canvas
		
	
	// STEP 3: Include an update() method to the Ball class
	Ball.prototype.update = function() {
		// STEP 3a: Check for collision with right or left edge of screen
		if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
			this.velX =- (this.velX);
		}
			// STEP 3b: Ball has hit the left or right edge of the canvas, so reverse the direction of travel
		
		
		// STEP 3c: Check for collision with top or bottom edge of screen
		
			// STEP 3d: Ball has hit the top or bottom edge of the canvas, so reverse the direction of travel
			if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
				this.velY =- (this.velY);
			}
		
		// STEP 3e: Move the ball each time this method is called
		this.x += this.velX;
		this.y += this.velY;
	}
	


// STEP 4: Create an array to contain all the balls
let balls = []

// STEP 5: Build the animation loop
function loop() {
	// STEP 5a: Paint a black rectangle over top of the old canvas drawing
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	ctx.fillRect(0, 0, width, height);

	// STEP 5b: Create up to 25 randomly colored balls, and push each one to the balls array...
	while(balls.length < 25) {
		var ball = new Ball(
			random(0, width),
			random(0, height),
			random(-7, 7),
			random(-7, 7),
			'rgb(' + random(0, 255) + ', ' + random(0, 255) + ', ' + random(0, 255) + ')',
			random(10, 20)
		);
		balls.push(ball);
	}
	for (let i = 0; i < balls.length; i++) {
		balls[i].draw();
		balls[i].update();
	}
	requestAnimationFrame(loop);
	// STEP 5c: For each ball object instance, draw it and update it
	

	// STEP 5d: Use the requestAnimationFrame to loop
	

}
// STEP 6: Call the animation loop() function to get things rolling
loop();

/* Read the full tutorial (which also includes collision detection) at MDN available at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice */
