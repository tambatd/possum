var img;
var x = false;
function preload() {
  img = loadImage('tenor.gif');
}

function setup() {
    //background(50);
    frameRate(30);
  createCanvas(window.innerWidth, window.innerHeight);

  image(img, window.innerWidth/2, window.innerHeight/2-150, 100, 100);
  stroke(255);
  fill(255);
textSize(15);
textAlign(CENTER);

text('possum on da roomba fo today', window.innerWidth/2, window.innerHeight/2);
}


function draw() {
  if(x==true)
  {
let s = random(500);
  image(img, random(window.innerWidth), random(window.innerHeight),s, s);
  }
}

function touchStarted(){
  console.log(x);
  x= true;
}
