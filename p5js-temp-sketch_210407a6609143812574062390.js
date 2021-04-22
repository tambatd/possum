var img;
var img2;
var song;
var k = false;
function preload() {
  img = loadImage('tenor.gif');
    img2 = loadImage('pos.PNG');

}

function setup() {
    
    //background(50);
    frameRate(30);
  createCanvas(window.innerWidth, window.innerHeight);
  for(i=0;i<100;i++){
   image(img2, window.innerWidth/2-125, window.innerHeight/2-250, 250, 250);
  }
  stroke(255);
  fill(255);
       song = loadSound('brodyquest.mp3');
       textAlign(CENTER);

//button = createButton('possum on da roomba fo today');
 // button.position(window.innerWidth/2-100, window.innerHeight/2+100);
 // button.mousePressed(audio);
textSize(15);
textAlign(CENTER);
fill(255);
textSize(10);
//text('BRODYQUEST by Neil Cicierega', 80, 25);
//text('possum on da roomba fo today', window.innerWidth/2, window.innerHeight/2);
}
//brodyquest

function draw() {

  if(k==true)
  {
        image(img, window.innerWidth/2-125, window.innerHeight/2-250, 250, 250);

let s = random(500);
  image(img, random(window.innerWidth), random(window.innerHeight),s, s);
  }
}
function audio() {
    song.play();
    k= true;
    button.remove();
}
