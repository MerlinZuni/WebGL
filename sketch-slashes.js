// Project variables
let slashes; // liip icon logo
let angle = 0; //Spin amount
let song; // Audio object
let amp; // Sound data value 
let button; // play pause button

function toggleSong(){
    if (song.isPlaying()){
        song.pause();
    } else {
        song.play();
    }
}

function preload() {
    // loading files into the document
    slashes = loadModel('src/liip-slashes.obj'); // 3d model from blender
    // slashes = loadModel('src/boombox.obj');
    song = loadSound('src/Tribe-Called-Quest-Luck-Of-Lucien.mp3'); // audio file
}

function setup() {
	createCanvas(windowWidth, windowHeight-100, WEBGL);
    button = createButton('play/pause');
    button.mousePressed(toggleSong);
    //song.play();
    amp = new p5.Amplitude();

  }
  
  function draw() {

    var vol = amp.getLevel();
	//let amount = 50;
    // move the lights
	// let sinWave = sin(angle);
    let volWave = map(vol, 0, 1, 0, 50);
	// let z = sinWave * amount;

    background(110, 166, 68); // liip green 700

    // Scene Lights
    pointLight(208, 221, 44, -windowWidth/2, 0, 0) // liip green 100 - side
	pointLight(164, 195, 57, windowWidth/2, 0, 0)  // liip green 400 -side
    pointLight(208, 221, 44, 0, -200, 0)  // liip green 100 - above 
    pointLight(164, 195, 57, 0, 300, 0)  // liip green 400 - below 
    pointLight(255, 255, 255, 0, 0, 300)  // white 

    // stroke(0);
    // rotateY(-angle);
    // specularMaterial(255, 255, 0); // fill object with white
    // torus(200, 15);

    // stroke(0);
    // rotateX(angle);
    // normalMaterial(255, 255, 0); // fill object with white
    // torus(300, 25);

    // spin object
    rotateX(angle);
	rotateY(angle);
	rotateZ(angle);

    // slash object settings
    noStroke();
    scale(100+volWave); // size - move with music
   	ambientMaterial(255); // fill object with white
    //normalMaterial(); // rainbow debugger color 
    model(slashes); // load 3d model into canvas
    
    // value for the rotation
	angle += 0.01
  }
  
