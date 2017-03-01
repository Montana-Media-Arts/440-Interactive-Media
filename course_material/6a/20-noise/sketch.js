function setup() {
	createCanvas(800,400);
}

var t = 0;
var tDelta = 0.001;
var x = 0;
var xDelta = 0.5;

function draw() {
	var n = noise(t);
	// var n = random(0, 1);
	var y = map(n,0,1,0,height);
	ellipse(x,y,5,5);

	t += tDelta;
	x = x+xDelta;

	if (x>width || x < 0) {
		stroke(random(0,256),random(0,256),random(0,256));

		xDelta = xDelta * -1;
		x = x + xDelta;
	}

	console.log(x, xDelta);

}
