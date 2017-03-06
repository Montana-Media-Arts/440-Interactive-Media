var pred;
var prey;

var point2;
var point;

function setup() {
    createCanvas(800, 600);
    pred = new Predator(30, 30);
    prey = new Prey(width-30, height-30, pred);
    pred.updatePrey(prey);

    // frameRate(10);

    point2 = createVector((width/2) + 60, height/2);
    point = createVector(width/2, height/2);
}

function draw() {
    background(255);
    // pred.trackPrey();
    // pred.display();
    //
    // prey.trackPrey();
    // prey.display();



    var headingAngle = point2.copy().sub(point.x, point.y);

    text(
        headingAngle.heading(),
        100, 100
    );

    ellipse(point.x, point.y, 30, 30);
    ellipse(point2.x, point2.y, 30, 30);

    headingAngle.rotate(PI/90);
    point2.add(headingAngle);
    // ellipse(headingAngle.x, headingAngle.y, 20, 30);


}
