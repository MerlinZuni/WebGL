let angle = 0;

function setup() {
	createCanvas(710, 400, WEBGL);
  }
  
  function draw() {
	let amount = 50
	let sinWave = sin(angle);
	let z = sinWave * amount
	pointLight(0, 0, 255, -200, 0, 0)  
	background(250);
  
	translate(-240, -100, z);
	normalMaterial(); // rainbow debugger color
	push();
	stroke(1);
	rotateZ(frameCount * 0.01);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
	// flat paper
	plane(70);
	pop();
  
	translate(240, z, z);
	push();
	stroke(1);
	//rotateZ(frameCount * 0.01);
	rotateX(frameCount * 0.02);
	//rotateY(frameCount * 0.02);
	box(70, 70, 70);
	pop();
  
	translate(240, 0, z);
	push();
	stroke(1);
	rotateZ(frameCount * 0.03);
	rotateX(frameCount * 0.03);
	rotateY(frameCount * 0.03);
	// looks like a tire
	cylinder(70, 70);
	pop();
  
	translate(-240 * 2, 200, z);
	push();
	stroke(1);
	rotateZ(frameCount * 0.03);
	rotateX(frameCount * 0.03);
	rotateY(frameCount * 0.03);
	cone(70, 70);
	pop();
  
	translate(240, 0, z);
	push();
	stroke(1);
	rotateZ(frameCount * 0.02);
	rotateX(frameCount * 0.02);
	rotateY(frameCount * 0.02);
	torus(40, 35);
	pop();
  
	translate(240, 0, z);
	push();
	stroke(1);
	rotateZ(frameCount * 0.01);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
	sphere(70);
	pop();

	angle += 0.01
  }
  
