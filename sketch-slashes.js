// Project variables
let slashes; // liip icon logo
let angle = 0; //Spin amount
let song; // Audio object
let amp; // Sound data value 
let button; // play pause button
let slider; // change colors

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
    song = loadSound('src/Tribe-Called-Quest-Luck-Of-Lucien.mp3'); // audio file
}

function setup() {
	createCanvas(windowWidth, windowHeight-100, WEBGL);
    button = createButton('play/pause');
    button.mousePressed(toggleSong);
    //song.play();
    amp = new p5.Amplitude();

    // slider set-up
    slider = createSlider(0, 100, 50);
    slider.position(20, 20);
    slider.style('width', '120px');

  }

 
  function draw() {

    var vol = amp.getLevel();
	//let amount = 50;
    // move the lights
	// let sinWave = sin(angle);
    let volWave = map(vol, 0, 1, 0, 50);
	// let z = sinWave * amount;

    // Dark Mode
    let midnightSky = [12, 15, 51] // # 0c0f33 Midnight Blue
    let midnightMoon = [234, 240, 206] // #eaf0ce Pale Yellow
    let midnightShade = [181, 188, 171] // #b5bcab Muddy Yellow
    let midnightDir = [239, 202, 169] // #efcaa9 warm light

    // Day Mode
    let daySky = [110, 166, 68] // liip green 700 Kelly Green
    let daySun = [208, 221, 44] // liip green 100 lime Green
    let dayShade = [164, 195, 57] // liip green 400 light Green
    let dayDir = [255, 255, 255] // white light

    // Dusk Mode
    let duskSky = [68, 56, 80] // #443850 Purple
    let duskSun = [254, 250, 220] // #fefadc Pale Yellow
    let duskShade = [243, 179, 145] // #f3b391 Orange
    let duskDir = [246, 212, 186]// #f6d4ba

    // Light Variables
    let lightBright = [0,0,0];
    let lightMedium = [0,0,0];
    let lightDark = [0,0,0];
    let lightDir = [255, 255, 255];

    // slider controls
    let val = slider.value();
    if (val <= 33) {
        lightDark = midnightSky;
        lightBright = midnightMoon;
        lightMedium = midnightShade;
    } else if (val >= 34 && val <= 66) {
        lightDark = duskSky;
        lightBright = duskSun;
        lightMedium = duskShade;
        lightDir = duskDir;
    } else {
        lightDark = daySky;
        lightBright = daySun;
        lightMedium = dayShade;
        lightDir = dayDir;
    }

    console.log(val);

    background(lightDark); // liip green 700 (dark)

    // Daytime Scene Lights
    pointLight(lightBright, -windowWidth/2, 0, 0) // (bright) liip green 100 - side
	pointLight(lightMedium, windowWidth/2, 0, 0)  // (medium) liip green 400 -side
    pointLight(lightBright, 0, -200, 0)  // (bright) liip green 100 - above 
    pointLight(lightMedium, 0, 300, 0)  // (medium) liip green 400 - below 
    pointLight(lightDir, 0, 0, 300)  // white - direct

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
  
