
var pos_x = 200;
var pos_y = 200;

var max_move = 4;

var probArr = [0, 20, 40, 60, 80];

function setup() {
  createCanvas(800,600);
}

function draw() {
  background(255);


  ellipse(pos_x,pos_y, 8, 8);


  var diff_x = mouseX - pos_x;
  var diff_y = mouseY - pos_y;
  text(diff_x + " : " + diff_y, 20, 20);

  if ( abs(diff_x) > abs(diff_y) ) {
    // x axis is greater distance
    if (diff_x >= 0) {
      probArr = [0, 80, 85, 93, 100];
    } else {
      probArr = [0, 07, 87, 93, 100];
    }

  } else {
    if (diff_y >= 0) {
      probArr = [0, 07, 18, 25, 100];
    } else {
      probArr = [0, 07, 18, 95, 100];
    }
  }



  var dir = floor( random(100) );

  if ( dir >= probArr[0] && dir < probArr[1]) {
    pos_x += random(0, max_move);
  } else if (dir >= probArr[1] && dir < probArr[2]) {
    pos_x += random(-max_move, 0);
  } else if (dir >= probArr[2] && dir < probArr[3]) {
    pos_y += random(-max_move, 0);
  } else if (dir >= probArr[3] && dir < probArr[4]){
    pos_y += random(0, max_move);
  }



}
