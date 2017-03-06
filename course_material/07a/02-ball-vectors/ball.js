function Ball(init_x, init_y) {

    // create a parameter to represent location
    this.loc = createVector(init_x, init_y);


    this.velocity = createVector(0, 0);

    this.acceleration = createVector(0, 1);
    this.groundFriction = 0.9;

    this.ball_diam = 30;
    this.ball_color = color(30, 70, 170);
}

Ball.prototype.frame = function () {

    this.info();

    this.move();
    this.checkGround();
    this.display();
};

Ball.prototype.info = function() {
    console.log(this.velocity);
};

Ball.prototype.move = function() {

    this.velocity.add(this.acceleration);

    this.loc.add(this.velocity);

};

Ball.prototype.checkGround = function () {
    if (this.loc.y >= height) {
        this.velocity.mult(this.groundFriction);
        // this.velocity.y *= -1;
        this.velocity.rotate(PI);
        this.loc.y = height - 1;
    }
};

Ball.prototype.display = function () {

    push();

    fill(this.ball_color);
    ellipse(this.loc.x, this.loc.y, this.ball_diam, this.ball_diam);

    pop();
};
