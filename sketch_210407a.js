var img;
var song;
var x = false;
function preload() {
  img = loadImage('tenor.gif');
}

function setup() {
    
    //background(50);
    frameRate(30);
  createCanvas(window.innerWidth, window.innerHeight);
  song = loadSound('brodyquest.mp3');

  image(img, window.innerWidth/2, window.innerHeight/2-150, 100, 100);
  stroke(255);
  fill(255);
textSize(15);
textAlign(CENTER);
fill(255);
textSize(10);
//text('BRODYQUEST by Neil Cicierega', 80, 25);
text('possum on da roomba fo today', window.innerWidth/2, window.innerHeight/2);
}
//brodyquest

function draw() {
  if(x==true)
  {
let s = random(500);
  image(img, random(window.innerWidth), random(window.innerHeight),s, s);
  }
}

function touchStarted(){
  if(x==false){
  song.play();
}
  console.log(x);
  x= true;
}
