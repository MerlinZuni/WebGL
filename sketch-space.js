let astronaut;

function preload() {
    astronaut = loadModel("AmongUs.obj");
}


let angle = 0;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
  }
  
  function draw() {
	//let amount = 50
	//let sinWave = sin(angle);
	//let z = sinWave * amount
    background(0);
    scale(0.5); // ask Vera what this function is?
	rotateX(angle);
	rotateY(angle * 0.3);
	rotateZ(angle * 1.2);
    model(astronaut);

	pointLight(255, 255, 0, -200, 0, 0) 
	pointLight(255, 0, 0, 0, 0, -200)   

  
	//translate(-240, -100, z);
	normalMaterial(); // rainbow debugger color
	// specularMaterial(255, 255, 255);
	

	angle += 0.01
  }
  
