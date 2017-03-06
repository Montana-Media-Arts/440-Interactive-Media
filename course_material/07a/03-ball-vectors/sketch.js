var ball;
var wind;
var count = 0;

function setup() {
    createCanvas(windowWidth,windowHeight);

    ball = new Ball(10, 2);

    // wind = createVector(0.001, 0);
}

function draw() {
    background(240);
    count += 0.05;

    wind = noise(count);
    wind = map(wind, 0, 1, -1, 0.75);
    wind = constrain(wind, 0, 1);
    wind *= 0.01;
    ellipse(count*10, wind, 10, 10);

    text(wind, 20, 20);


    ball.force(wind);

    ball.frame();
}
