let img;
function preload(){
  img = loadImage('assets/humoudaniLogo.png');
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0,0,0,0);
  image(img, width/2 - 250, height/2 - 250, 500,500);
}

