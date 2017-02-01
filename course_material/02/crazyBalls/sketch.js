function setup() {
	createCanvas(600,400);
	frameRate(30);
}
//fixed x and y position
var posX = 10;
var posY = 10;

//Max time
var maxtime = 100;
//time var
var eltime = 0;

var diamAuto = 20;
var radAuto = diamAuto/2;

var diamMouse = 30;
var radMouse = diamMouse/2;
//allows you to change x and y
var deltaX = 1;
var deltaY = 1;

function draw() {
	background('red');
	touchTimer();
	fill('blue');
	noStroke();
	ellipse(posX,posY,20,20);
	//position change
	posX = posX + deltaX;
	posY = posY + deltaY;

	if (posX >= width || posX < 0){
		posX = 10;
	}
	if (posY >= height || posY < 0) {
		posY = 10;
	}
	fill(0,255,0);
	ellipse(mouseX,mouseY,25,25);

	if(dist(posX, posY, mouseX,mouseY) <= radMouse + radAuto) {
		var opt = floor(random(2));
		if(opt == 0) {
			deltaX = (deltaX * -1.1);
		} else if (opt == 1) {
			deltaY = (deltaY * -1.1);
		}
		eltime = 0;
	}
}
//pos change function
function posChange(){

}


//time function
function touchTimer(){
	eltime++;
	//use text function
	//text size
	textSize(20);
	text(eltime, width/2, height/2);
	if (eltime >= maxtime){
		deltaX = deltaX * 0.5;
		deltaY = deltaY * 0.5;
		eltime = 0;
	}
}
