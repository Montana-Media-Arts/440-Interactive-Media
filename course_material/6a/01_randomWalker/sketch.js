
var pos_x = 200;
var pos_y = 200;

var max_move = 4;

function setup() {
  createCanvas(800,600);
}

function draw() {

  ellipse(pos_x,pos_y, 8, 8);

  var dir = floor( random(100) );

  if ( dir >= 0 && dir < 40) {
    pos_x += random(0, max_move);
  } else if (dir >= 40 && dir < 60) {
    pos_x += random(-max_move, 0);
  } else if (dir >= 60 && dir < 80) {
    pos_y += random(-max_move, 0);
  } else if (dir >= 80 && dir < 100){
    pos_y += random(0, max_move);
  }



}
