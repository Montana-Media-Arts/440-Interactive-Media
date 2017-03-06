var ball;

function setup() {
    createCanvas(windowWidth,windowHeight);

    ball = new Ball(random(width), random(height));
}

function draw() {
    background(240);
    ball.frame();
}
