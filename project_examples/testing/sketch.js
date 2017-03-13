
// global variables
var bg_col;


function setup() {
    createCanvas(windowWidth,windowHeight);
    bg_col = color(127, 165, 189);
    background(bg_col);


}

function draw() {
	translate(width/2, height/2);


	rotate(0);


    var thingWidth = 80
    var thingHeight = thingWidth * 2.6;
	fill(200, 37, 95);
	push();
	scale(1, -1);
    arc(0, 0, thingWidth, thingHeight, 0, PI, CHORD);
	pop();

	fill(2, 60, 127);
	var eye_x = thingWidth * 0.165;
	var eye_y = thingHeight * -0.3;
	var eye_size = thingWidth * 0.125;
	ellipse(-eye_x, eye_y, eye_size, eye_size);
	ellipse(eye_x, eye_y, eye_size, eye_size);

}
