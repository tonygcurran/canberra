var img;
var sw;
var sel;

function preload() {
  img = loadImage('can.jpg');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
    background(220);
  img.resize(displayWidth*1.3, displayHeight*1.3);
  // image(img, 0, 0, 360, 480);
sel = 20;
  sely = 20;
}

function draw() {

sw = 3;

  
 
   var slice = img.get(sel,sely,sw,displayHeight+sely);
  for (var i=0; i < width ; i = i + sw){
    
    image(slice, i, 0);
 //  noLoop();
//sw = sw +random(-.2,.2);
    if (sel<=0 || sel >= width){
      sel = 20;
    }
     if (sel<=0 || sel >= displayHeight){
      sel = 20;
    }
    
    sel = sel + random(-.02,.02);
    sely = sely + random(-.02,.02);
 
  }

    
}

function mousePressed() {
fullscreen(1);
  noCursor();
}