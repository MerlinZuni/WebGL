//code train example

let angle = 0;

function setup() 
{
	createCanvas(400, 300, WEBGL);
}

function draw(){
	background(175);
	//shape definitions
	rectMode(CENTER);
	noStroke();
	fill(0, 0, 255);

	// move the box
	translate(mouseX - width / 2, mouseY - height / 2);

	rotateX(angle);
	rotateY(angle * 0.3);
	rotateZ(angle * 1.2);
	//rect(0, 0, 150, 150);
	box(10, 100, 50);
	angle += 0.07;
}
